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
	"go.uber.org/zap"
)

type App struct {
	Port   int16
	Ctx    context.Context
	Router *gin.Engine
	server *http.Server
	db     *pgxpool.Pool
	Logger *zap.Logger
}

func NewApp(port int16) *App {
	err := godotenv.Load()
	if err != nil {
		fmt.Fprintf(os.Stderr, "No .env file found or error loading: %v\n", err)
		os.Exit(1)
	}

	// Create logger
	var logger *zap.Logger
	if os.Getenv("DEV") == "1" {
		logger, err = zap.NewDevelopment()
	} else {
		logger, err = zap.NewProduction()
	}
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to initialize logger: %v\n", err)
		os.Exit(1)
	}

	logger.Info("🚀 Starting Rusalka application",
		zap.String("mode", func() string {
			if os.Getenv("DEV") == "1" {
				return "development"
			}
			return "production"
		}()),
		zap.Int16("port", port),
	)

	dbCtx := context.Background()
	r := gin.Default()
	if os.Getenv("DEV") == "1" {
		// Configure CORS for development with Better Auth support
		config := cors.Config{
			AllowOrigins: []string{
				"http://localhost:3000",
				"http://localhost:3001",
				"http://127.0.0.1:3000",
				"http://127.0.0.1:3001",
			},
			AllowMethods: []string{
				"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS",
			},
			AllowHeaders: []string{
				"Origin",
				"Content-Length",
				"Content-Type",
				"Authorization",
				"Accept",
				"Accept-Encoding",
				"Accept-Language",
				"Cache-Control",
				"Connection",
				"DNT",
				"Host",
				"Pragma",
				"Referer",
				"User-Agent",
				"X-Requested-With",
				"X-CSRF-Token",
				"X-Forwarded-For",
				"X-Forwarded-Proto",
				"X-Forwarded-Host",
			},
			ExposeHeaders: []string{
				"Content-Length",
				"Content-Type",
				"Authorization",
				"Set-Cookie",
			},
			AllowCredentials: true,
			MaxAge:          12 * 3600, // 12 hours
		}
		r.Use(cors.New(config))
		fmt.Println("ENABLING CORS FOR DEVELOPMENT WITH BETTER AUTH SUPPORT")
	} else {
		// Production CORS configuration
		config := cors.Config{
			AllowOrigins: []string{
				// Add your production frontend URLs here
				"https://yourdomain.com",
			},
			AllowMethods: []string{
				"GET", "POST", "PUT", "PATCH", "DELETE", "HEAD", "OPTIONS",
			},
			AllowHeaders: []string{
				"Origin",
				"Content-Length",
				"Content-Type",
				"Authorization",
				"Accept",
				"X-Requested-With",
				"X-CSRF-Token",
			},
			ExposeHeaders: []string{
				"Content-Length",
				"Content-Type",
				"Authorization",
				"Set-Cookie",
			},
			AllowCredentials: true,
			MaxAge:          12 * 3600,
		}
		r.Use(cors.New(config))
		fmt.Println("CORS ENABLED FOR PRODUCTION")
	}

	s := &http.Server{
		Addr:    fmt.Sprintf(":%d", port),
		Handler: r,
	}

	return &App{
		Port:   port,
		Ctx:    dbCtx,
		server: s,
		Router: r,
		Logger: logger,
	}
}

func (app *App) Run() {
	app.Logger.Info("🌐 Server starting", zap.String("address", app.server.Addr))

	if err := app.server.ListenAndServe(); err != nil && err != http.ErrServerClosed {
		app.Logger.Fatal("Failed to start server", zap.Error(err))
	}
}
