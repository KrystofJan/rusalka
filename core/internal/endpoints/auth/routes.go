package auth

import (
	"context"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(ctx context.Context, router *gin.Engine) {
	router.GET("/api/auth/verify", TryUserFromRequest)
	router.GET("/api/me", TryUserFromRequest)
}
