package account

import (
	"net/http"

	"github.com/KrystofJan/rusalka/core/internal/db"
	er "github.com/KrystofJan/rusalka/core/internal/error"
	"github.com/KrystofJan/rusalka/core/internal/repository"
	"github.com/gin-gonic/gin"
)

type AccountHandlerContext struct{}

func (AccountHandlerContext) FindAllAccounts(ctx *gin.Context) {
	conn, err := db.NewDatabase(ctx)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, er.HttpError{
			Message: "Unable to connect to database",
			Code:    er.DatabaseError,
			Error:   err,
		})
		return
	}

	repo := repository.New(conn)

	accounts, err := repo.FindAllAccounts(ctx)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, err)
		return
	}
	ctx.JSON(http.StatusOK, accounts)
}

func (AccountHandlerContext) FindSingle(ctx *gin.Context) {
	id := ctx.Param("id")

	conn, err := db.NewDatabase(ctx)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, er.HttpError{
			Message: "Unable to connect to database",
			Code:    er.DatabaseError,
			Error:   err,
		})
		return
	}

	repo := repository.New(conn)
	account, err := repo.FindAccountById(ctx, id)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, er.HttpError{
			Message: "Something went wrong when querying the database",
			Code:    er.RecordNotFound,
			Error:   err,
		})
		return
	}

	ctx.JSON(http.StatusOK, account)
}
