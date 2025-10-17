package account

import (
	"github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
	acc_context := AccountHandlerContext{}

	router.GET("/api/accounts", acc_context.FindAllAccounts)
	router.GET("/api/accounts/:id", acc_context.FindSingle)
}
