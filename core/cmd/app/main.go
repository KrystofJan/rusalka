package main

import (
	. "github.com/KrystofJan/rusalka/core/internal/app"
)

func main() {
	app := NewApp(8082)
	if app == nil {
		return
	}
	app.SetupRoutes()

	app.Run()
}
