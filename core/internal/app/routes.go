package app

import (
	"github.com/KrystofJan/rusalka/core/internal/endpoints/account"
	"github.com/KrystofJan/rusalka/core/internal/endpoints/auth"
)

func (app *App) SetupRoutes() {
	account.SetupRoutes(app.Ctx, app.Router)
	auth.SetupRoutes(app.Ctx, app.Router)
}
