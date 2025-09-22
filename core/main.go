package main

import (
  "net/http"

  "github.com/gin-gonic/gin"
)

func main() {
  r := gin.Default()

  r.GET("/ping", func(c *gin.Context) {
    c.JSON(http.StatusOK, gin.H{
      "message": "pong",
    })
  })

  r.Run()
}

// docker run -d \
// 	--name some-postgres \
// 	-e POSTGRES_PASSWORD=mysecretpassword \
// 	-e PGDATA=/var/lib/postgresql/data/pgdata \
// 	-v /custom/mount:/var/lib/postgresql/data \
// 	postgres
