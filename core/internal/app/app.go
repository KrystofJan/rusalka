package app

import (
	"context"
	"fmt"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

type App struct {
	Port   string
	Ctx    context.Context
	Router *gin.Engine
	db     *pgxpool.Pool
}

func NewApp(port string) *App {
	err := godotenv.Load()
	if err != nil {
		fmt.Fprintf(os.Stderr, "No .env file found or error loading: %v\n", err)
		os.Exit(1)
	}
	dbCtx := context.Background()
	r := gin.Default()
	return &App{
		Port:   port,
		Ctx:    dbCtx,
		Router: r,
	}
}

func (app *App) Run() {
	app.Router.Run()
}
