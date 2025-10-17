package app

import (
	"github.com/KrystofJan/rusalka/core/internal/endpoints/account"
	"github.com/KrystofJan/rusalka/core/internal/endpoints/auth"
	"github.com/KrystofJan/rusalka/core/internal/endpoints/project"
)

func (app *App) SetupRoutes() {
	account.SetupRoutes(app.Router)
	auth.SetupRoutes(app.Router)
	project.SetupRoutes(app.Router)
}
