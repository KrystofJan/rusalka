package main

import . "github.com/KrystofJan/rusalka/core/app"

func main() {
	app := NewApp("8080")
	app.SetupRoutes()

	app.Run()
}
