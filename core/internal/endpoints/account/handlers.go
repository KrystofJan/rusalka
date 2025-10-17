package account

import (
	"net/http"

	"github.com/KrystofJan/rusalka/core/internal/db"
	"github.com/KrystofJan/rusalka/core/internal/repository"
	"github.com/KrystofJan/rusalka/core/lib"
	"github.com/gin-gonic/gin"
)

type AccountHandlerContext struct{}

func (AccountHandlerContext) FindAllAccounts(ctx *gin.Context) {
	conn, err := db.NewDatabase(ctx)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, lib.HttpError{
			Message: "Unable to connect to database",
			Code:    lib.DatabaseError,
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
		ctx.JSON(http.StatusInternalServerError, lib.HttpError{
			Message: "Unable to connect to database",
			Code:    lib.DatabaseError,
			Error:   err,
		})
		return
	}

	repo := repository.New(conn)
	account, err := repo.FindAccountById(ctx, id)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, lib.HttpError{
			Message: "Something went wrong when querying the database",
			Code:    lib.RecordNotFound,
			Error:   err,
		})
		return
	}

	ctx.JSON(http.StatusOK, account)
}
