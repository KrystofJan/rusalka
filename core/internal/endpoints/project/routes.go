package project

import (
	"github.com/KrystofJan/rusalka/core/internal/middleware"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	acc_context := ProjectHandlerContext{}

	router.GET("/api/projects", acc_context.FindAllAccounts)
	router.GET("/api/projects/:id", acc_context.FindSingle)
	router.POST("/api/projects", middleware.Authenticated(), acc_context.Insert)
}
