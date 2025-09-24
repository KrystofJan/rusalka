package main

import (
	. "github.com/KrystofJan/rusalka/core/app"
)

func main() {
	app := NewApp(8080)
	if app == nil {
		return
	}
	app.SetupRoutes()

	app.Run()
}
