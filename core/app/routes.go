package app

import "github.com/KrystofJan/rusalka/core/endpoints/account"

func (app *App) SetupRoutes() {
	account.SetupRoutes(app.Ctx, app.Router)
}
