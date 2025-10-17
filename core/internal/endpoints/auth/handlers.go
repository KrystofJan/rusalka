package auth

import (
	"net/http"

	"github.com/KrystofJan/rusalka/core/internal/db"
	"github.com/KrystofJan/rusalka/core/internal/repository"
	"github.com/KrystofJan/rusalka/core/lib"
	"github.com/gin-gonic/gin"
	"github.com/gin-gonic/gin/binding"
)

type AuthHandlerContext struct{}

type IDLessInsertAccountParams struct {
	FirstName string          `json:"first_name"`
	LastName  string          `json:"last_name"`
	Role      repository.Role `json:"role"`
}

func (AuthHandlerContext) TryUserFromRequest(ctx *gin.Context) {
	user, err := UserFromRequest(ctx)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, lib.HttpError{
			Message: "Something went wrong",
			Code:    lib.DatabaseError,
			Error:   err,
		})
		return
	}

	ctx.JSON(http.StatusOK, user)
}

func (AuthHandlerContext) Signup(ctx *gin.Context) {
	user, err := UserFromRequest(ctx)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, lib.HttpError{
			Message: "Something went wrong",
			Code:    lib.DatabaseError,
			Error:   err,
		})
		return
	}
	userBody := IDLessInsertAccountParams{}
	if errA := ctx.ShouldBindBodyWith(&userBody, binding.JSON); errA != nil {
		ctx.JSON(http.StatusBadRequest, lib.HttpError{
			Message: "Could not bind the body to the type",
			Code:    lib.RequestError,
			Error:   err,
		})
		return
	}

	conn, err := db.NewDatabase(ctx)
	if err != nil {
		ctx.JSON(
			http.StatusInternalServerError,
			lib.HttpError{
				Message: "Unable to connect to database",
				Code:    lib.DatabaseError,
				Error:   err,
			},
		)
		return
	}
	repo := repository.New(conn)
	account, err := repo.InsertAccount(
		ctx,
		repository.InsertAccountParams{
			ID:        user.ID,
			Role:      userBody.Role,
			FirstName: userBody.FirstName,
			LastName:  userBody.LastName,
		},
	)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, lib.HttpError{
			Message: "Something went wrong when querying the database",
			Code:    lib.DatabaseError,
			Error:   err,
		})
		return
	}

	ctx.JSON(http.StatusCreated, account)
}
