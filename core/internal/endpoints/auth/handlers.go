package auth

import (
	"net/http"

	er "github.com/KrystofJan/rusalka/core/internal/error"
	"github.com/gin-gonic/gin"
)

func TryUserFromRequest(ctx *gin.Context) {
	user, err := UserFromRequest(ctx.Request)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, er.HttpError{
			Message: "Something went wrong",
			Code:    er.DatabaseError,
			Error:   err,
		})
		return
	}

	ctx.JSON(http.StatusOK, user)
}
