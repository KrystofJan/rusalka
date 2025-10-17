package auth

import (
	"github.com/KrystofJan/rusalka/core/internal/middleware"
	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	auth_context := AuthHandlerContext{}
	router.GET("/api/me", middleware.Authenticated(), auth_context.TryUserFromRequest)
	router.POST("/api/signup", auth_context.Signup)
}
