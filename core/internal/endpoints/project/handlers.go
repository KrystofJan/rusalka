package project

import (
	"net/http"

	"github.com/KrystofJan/rusalka/core/internal/db"
	"github.com/KrystofJan/rusalka/core/internal/repository"
	"github.com/KrystofJan/rusalka/core/lib"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
)

type ProjectHandlerContext struct{}

func (ProjectHandlerContext) FindAllAccounts(ctx *gin.Context) {
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

	projects, err := repo.FindAllProjects(ctx)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, err)
		return
	}
	ctx.JSON(http.StatusOK, projects)
}

func (ProjectHandlerContext) FindSingle(ctx *gin.Context) {
	id, err := uuid.Parse(ctx.Param("id"))
	if err != nil {
		ctx.JSON(http.StatusBadRequest, lib.HttpError{
			Message: "Unable to get the uuid from the request",
			Code:    lib.RequestError,
			Error:   err,
		})
		return
	}

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
	project, err := repo.FindProjectById(ctx, id)

	if err != nil {
		ctx.JSON(http.StatusInternalServerError, lib.HttpError{
			Message: "Something went wrong when querying the database",
			Code:    lib.RecordNotFound,
			Error:   err,
		})
		return
	}

	ctx.JSON(http.StatusOK, project)
}

func (ProjectHandlerContext) Insert(ctx *gin.Context) {
	var project repository.InsertProjectParams
	err := ctx.ShouldBind(&project)
	if err != nil {
		ctx.JSON(http.StatusBadRequest, lib.HttpError{
			Message: "Unable to parse data in the body to the Project type",
			Code:    lib.RequestError,
			Error:   err,
		})
		return
	}

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
	result, err := repo.InsertProject(ctx, project)
	if err != nil {
		ctx.JSON(http.StatusInternalServerError, lib.HttpError{
			Message: "Something went wrong when querying the database",
			Code:    lib.RecordNotFound,
			Error:   err,
		})
		return
	}
	ctx.JSON(http.StatusCreated, result)
}
