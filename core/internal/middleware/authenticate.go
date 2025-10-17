package middleware

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"
	"os"
	"time"

	"github.com/gin-gonic/gin"

	"github.com/lestrrat-go/jwx/v3/jwk"
	"github.com/lestrrat-go/jwx/v3/jwt"

	"github.com/KrystofJan/rusalka/core/internal/cache"
	"github.com/KrystofJan/rusalka/core/lib"
)

func getOrSetJwk(ctx context.Context) (jwk.Set, error) {
	client, err := cache.GetValkeyClient()
	if err != nil {
		return nil, err
	}

	getCmd := client.B().Get().Key(lib.JWK_KEYSET_KEY).Build()
	getRespone := client.Do(ctx, getCmd)
	if err := getRespone.Error(); err != nil {
		keyset, err := jwk.Fetch(
			ctx,
			fmt.Sprintf("%s/api/auth/jwks", os.Getenv(lib.CLIENT_API_URL)))

		if err != nil {
			return nil, lib.JWKFetchError
		}
		go func() error {
			jwkJSON, err := json.Marshal(keyset)
			if err != nil {
				return err
			}

			setCmd := client.
				B().
				Set().
				Key(lib.JWK_KEYSET_KEY).
				Value(string(jwkJSON)).
				Ex(time.Hour).
				Build()

			if err := client.Do(ctx, setCmd).Error(); err != nil {
				return lib.ValkeySetError
			}
			return nil
		}()
		return keyset, nil
	}

	jwkString, err := getRespone.ToString()

	if err != nil {
		return nil, fmt.Errorf("Could not parse the jwk value to string from valkey")
	}

	keyset, err := jwk.Parse([]byte(jwkString))
	if err != nil {

		return nil, fmt.Errorf("Could not parse jwk keyset to string")
	}

	return keyset, nil
}

func Authenticated() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		r := ctx.Request
		keyset, err := getOrSetJwk(r.Context())
		if err != nil {
			ctx.JSON(http.StatusUnauthorized, lib.HttpError{
				Message: err.Error(),
				Code:    lib.CacheError,
				Error:   err,
			})
			ctx.Abort()
			return
		}

		token, err := jwt.ParseRequest(r, jwt.WithKeySet(keyset))
		if err != nil {
			ctx.JSON(http.StatusUnauthorized, lib.HttpError{
				Message: "Unauthorized",
				Code:    lib.AuthenticationError,
				Error:   err,
			})
			ctx.Abort()
			return
		}

		ctx.Set("token", token)
		ctx.Next()
	}
}
