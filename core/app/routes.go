package app

import (
	"github.com/KrystofJan/rusalka/core/endpoints/account"
	"github.com/KrystofJan/rusalka/core/endpoints/auth"
)

func (app *App) SetupRoutes() {
	account.SetupRoutes(app.Ctx, app.Router)
	auth.SetupRoutes(app.Ctx, app.Router)
}
