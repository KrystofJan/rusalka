package account

import (
	"context"

	"github.com/gin-gonic/gin"
)

func SetupRoutes(ctx context.Context, router *gin.Engine) {
	acc_context := &AccountHandlerContext{context: ctx}

	router.GET("/accounts", acc_context.FindAllAccounts)
	router.GET("/accounts/:id", acc_context.FindSingle)
}
