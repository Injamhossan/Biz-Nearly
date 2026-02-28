package main

import (
	"context"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/jackc/pgx/v5/pgxpool"
	"github.com/joho/godotenv"
)

func main() {
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found in current directory, checking parent directory...")
		if err := godotenv.Load("../.env"); err != nil {
			log.Println("Warning: No .env file found")
		}
	}

	// Database Connection
	dbURL := os.Getenv("DATABASE_URL")
	if dbURL == "" {
		log.Println("Warning: DATABASE_URL not set in environment")
	} else {
		dbPool, err := pgxpool.New(context.Background(), dbURL)
		if err != nil {
			log.Printf("Unable to create connection pool: %v\n", err)
		} else {
			defer dbPool.Close()
			var version string
			err = dbPool.QueryRow(context.Background(), "SELECT version()").Scan(&version)
			if err != nil {
				log.Printf("Database connection failed: %v\n", err)
			} else {
				log.Println("Successfully connected to database:", version)
			}
		}
	}

	// Initialize Gin
	r := gin.Default()

	// Define Routes
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "Welcome to the BizNearly Backend!",
			"status":  "running",
		})
	})

	r.GET("/ping", func(c *gin.Context) {
		c.JSON(http.StatusOK, gin.H{
			"message": "pong",
		})
	})

	r.GET("/favicon.ico", func(c *gin.Context) {
		c.Status(http.StatusNoContent)
	})

	// Start Server
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Printf("Server starting on port %s", port)
	if err := r.Run(":" + port); err != nil {
		log.Fatalf("Failed to run server: %v", err)
	}
}
