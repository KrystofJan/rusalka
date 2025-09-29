package app

import (
	"context"
	"fmt"
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

type App struct {
	Port   int16
	Ctx    context.Context
	Router *gin.Engine
	server *http.Server
	db     *pgxpool.Pool
}

func NewApp(port int16) *App {
	err := godotenv.Load()
	if err != nil {
		fmt.Fprintf(os.Stderr, "No .env file found or error loading: %v\n", err)
		os.Exit(1)
	}
	dbCtx := context.Background()
	r := gin.Default()
	if os.Getenv("DEV") == "1" {
		r.Use(cors.Default())
		fmt.Println("ENABLING CORS FOR ALL")
	} else {
		fmt.Println("CORS NOT ENABLED FOR ALL, PLEASE SET THIS UP")
		return nil
		// TODO: Set up cors for prod, delete nil return
		// r.Use(cors)
	}

	s := &http.Server{
		Addr:    ":8080",
		Handler: r,
	}

	return &App{
		Port:   port,
		Ctx:    dbCtx,
		server: s,
		Router: r,
	}
}

func (app *App) Run() {
	app.server.ListenAndServe()
}
