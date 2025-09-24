package auth

import (
	"errors"
	"fmt"
	"net/http"
	"os"

	"github.com/lestrrat-go/jwx/v3/jwk"
	"github.com/lestrrat-go/jwx/v3/jwt"
)

type User struct {
	ID    string `json:"id"`
	Email string `json:"email"`
	Name  string `json:"name"`
}

var (
	ErrMissingUserID = errors.New("Missing user id")
)

func UserFromRequest(r *http.Request) (User, error) {
	// TODO: Add cache: https://pkg.go.dev/github.com/lestrrat-go/jwx/v2/jwk#Cache
	keyset, err := jwk.Fetch(
		r.Context(),
		fmt.Sprintf("%s/api/auth/jwks", os.Getenv("CLIENT_API_URL")))
	if err != nil {
		return User{}, fmt.Errorf("fetch jwks %w", err)
	}

	token, err := jwt.ParseRequest(r, jwt.WithKeySet(keyset))
	if err != nil {
		return User{}, fmt.Errorf("Parse request: %w", err)
	}
	userID, exists := token.Subject()
	if !exists {
		return User{}, ErrMissingUserID
	}
	fmt.Print("Hello")

	var email string
	var name string

	token.Get("email", &email)
	token.Get("name", &name)

	return User{ID: userID, Email: email, Name: name}, nil
}
