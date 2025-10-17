package auth_test

import (
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"testing"

	"github.com/KrystofJan/rusalka/core/internal/endpoints/auth"
	"github.com/gin-gonic/gin"
	"github.com/stretchr/testify/assert"
)

func setupAuthRouter() *gin.Engine {
	gin.SetMode(gin.TestMode)
	router := gin.New()
	// TODO
	auth.SetupRoutes(router, nil)
	return router
}

func setupTestEnv() {
	// Set environment variables for testing with real database
	os.Setenv("DATABASE_URL", "postgres://postgres:postgres@localhost:7557/rusalka-dev")
	os.Setenv("CLIENT_API_URL", "http://localhost:3000")
	os.Setenv("DEV", "1")
}

func TestTryUserFromRequestNoAuth(t *testing.T) {
	setupTestEnv()
	router := setupAuthRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/me", nil)
	router.ServeHTTP(w, req)

	// Should return 401 Unauthorized for missing auth
	assert.Equal(t, http.StatusUnauthorized, w.Code)
}

func TestTryUserFromRequestInvalidAuth(t *testing.T) {
	setupTestEnv()
	router := setupAuthRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/me", nil)
	req.Header.Set("Authorization", "Bearer invalid-token")
	router.ServeHTTP(w, req)

	// Should return 401 Unauthorized for invalid token
	assert.Equal(t, http.StatusUnauthorized, w.Code)
}

func TestTryUserFromRequestMalformedAuth(t *testing.T) {
	setupTestEnv()
	router := setupAuthRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/me", nil)
	req.Header.Set("Authorization", "InvalidFormat")
	router.ServeHTTP(w, req)

	// Should return 401 Unauthorized for malformed auth header
	assert.Equal(t, http.StatusUnauthorized, w.Code)
}

func TestTryUserFromRequestWithToken(t *testing.T) {
	setupTestEnv()
	router := setupAuthRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/me", nil)
	// Add test authorization header (will fail JWT validation)
	req.Header.Set("Authorization", "Bearer test-token")
	router.ServeHTTP(w, req)

	// Since we don't have valid JWT, expect 401 Unauthorized
	assert.Equal(t, http.StatusUnauthorized, w.Code)
}

func TestUserStructJSONSerialization(t *testing.T) {
	// Test that User struct serializes correctly to JSON
	user := User{
		ID:    "test-id",
		Email: "test@example.com",
		Name:  "Test User",
	}

	jsonData, err := json.Marshal(user)
	assert.NoError(t, err)

	// Verify JSON structure
	var unmarshaled User
	err = json.Unmarshal(jsonData, &unmarshaled)
	assert.NoError(t, err)
	assert.Equal(t, user.ID, unmarshaled.ID)
	assert.Equal(t, user.Email, unmarshaled.Email)
	assert.Equal(t, user.Name, unmarshaled.Name)
}
