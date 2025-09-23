package app

import "github.com/KrystofJan/rusalka/core/lib/account"

func (app *App) SetupRoutes() {
	account.SetupRoutes(app.Ctx, app.Router)
}
