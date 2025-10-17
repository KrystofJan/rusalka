package auth

import (
	"errors"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/lestrrat-go/jwx/v3/jwt"
)

type User struct {
	ID    string `json:"id"`
	Email string `json:"email"`
	Name  string `json:"name"`
}

var (
	ErrMissingUserID   = errors.New("Missing user id")
	ErrUnauthenticated = errors.New("Unauthenticated")
)

func UserFromRequest(ctx *gin.Context) (User, error) {
	tokenVal, exists := ctx.Get("token")
	if !exists {
		return User{}, ErrUnauthenticated
	}

	token := tokenVal.(jwt.Token)
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
