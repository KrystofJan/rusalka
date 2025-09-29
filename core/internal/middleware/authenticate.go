package middleware

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"

	"github.com/lestrrat-go/jwx/v3/jwk"
	"github.com/lestrrat-go/jwx/v3/jwt"

	er "github.com/KrystofJan/rusalka/core/internal/error"
)

func Authenticated() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		fmt.Println("Starting to check the authentication")
		r := ctx.Request
		keyset, err := jwk.Fetch(
			r.Context(),
			fmt.Sprintf("%s/api/auth/jwks", os.Getenv("CLIENT_API_URL")))

		if err != nil {
			ctx.JSON(http.StatusInternalServerError, er.HttpError{
				Message: "Unable to get the keyset",
				Code:    er.ResourceError,
				Error:   err,
			})
			return
		}

		token, err := jwt.ParseRequest(r, jwt.WithKeySet(keyset))
		if err != nil {
			ctx.JSON(http.StatusUnauthorized, er.HttpError{
				Message: "Unauthorized",
				Code:    er.AuthenticationError,
				Error:   err,
			})

			return
		}
		ctx.Set("token", token)
		fmt.Println("Set the authentication token")
		ctx.Next()
	}
}
