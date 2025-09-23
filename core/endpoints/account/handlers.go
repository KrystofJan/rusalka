package account

import (
	"context"
	"net/http"
	"strconv"

	"github.com/KrystofJan/rusalka/core/db"
	er "github.com/KrystofJan/rusalka/core/error"
	"github.com/KrystofJan/rusalka/core/repository"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgtype"
)

type AccountHandlerContext struct {
	context context.Context
}

func (ctx AccountHandlerContext) FindAllAccounts(c *gin.Context) {
	conn, err := db.NewDatabase(ctx.context)
	if err != nil {
		c.JSON(http.StatusInternalServerError, er.HttpError{
			Message: "Unable to connect to database",
			Code:    er.DatabaseError,
			Error:   err,
		})
		return
	}

	repo := repository.New(conn)

	accounts, err := repo.FindAllAccounts(ctx.context)
	if err != nil {
		c.JSON(http.StatusInternalServerError, err)
		return
	}
	c.JSON(http.StatusOK, accounts)
}

func (ctx AccountHandlerContext) FindSingle(c *gin.Context) {

	id, err := strconv.ParseInt(c.Param("id"), 10, 64)
	if err != nil {
		c.JSON(http.StatusInternalServerError, err)
	}

	conn, err := db.NewDatabase(ctx.context)
	if err != nil {
		c.JSON(http.StatusInternalServerError, er.HttpError{
			Message: "Unable to connect to database",
			Code:    er.DatabaseError,
			Error:   err,
		})
		return
	}

	repo := repository.New(conn)
	account, err := repo.FindAccountById(ctx.context, pgtype.Int8{Int64: id, Valid: true})

	if err != nil {
		c.JSON(http.StatusInternalServerError, er.HttpError{
			Message: "Something went wrong when querying the database",
			Code:    er.RecordNotFound,
			Error:   err,
		})
		return
	}

	c.JSON(http.StatusOK, account)
}
