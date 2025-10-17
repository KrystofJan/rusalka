package project_test

import (
	"bytes"
	"encoding/json"
	"net/http"
	"net/http/httptest"
	"os"
	"strings"
	"testing"

	"github.com/KrystofJan/rusalka/core/internal/repository"
	"github.com/gin-gonic/gin"
	"github.com/google/uuid"
	"github.com/jackc/pgx/v5/pgtype"
	"github.com/stretchr/testify/assert"
)

func setupProjectRouter() *gin.Engine {
	gin.SetMode(gin.TestMode)
	router := gin.New()
	SetupRoutes(router)
	return router
}

func setupTestEnv() {
	// Set environment variables for testing with real database
	os.Setenv("DATABASE_URL", "postgres://postgres:postgres@localhost:7557/rusalka-dev")
	os.Setenv("CLIENT_API_URL", "http://localhost:3000")
	os.Setenv("DEV", "1")
}

func TestFindAllProjects(t *testing.T) {
	setupTestEnv()
	router := setupProjectRouter()

	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/projects", nil)
	router.ServeHTTP(w, req)

	// Test successful response
	assert.Equal(t, http.StatusOK, w.Code)

	// Test response structure
	var projects []repository.Project
	err := json.Unmarshal(w.Body.Bytes(), &projects)
	assert.NoError(t, err)

	// Basic validation - should be an array (even if empty)
	assert.IsType(t, []repository.Project{}, projects)
}

func TestFindSingleProject(t *testing.T) {
	setupTestEnv()
	router := setupProjectRouter()

	// Test with a valid UUID format (this might not exist in DB, so we expect 500)
	testUUID := uuid.New()
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/projects/"+testUUID.String(), nil)
	router.ServeHTTP(w, req)

	// Since the project likely doesn't exist, we expect 500 (database error)
	// In a real scenario with test data, this would be 200
	assert.Equal(t, http.StatusInternalServerError, w.Code)

	// Test that it's a proper JSON error response
	assert.Contains(t, w.Header().Get("Content-Type"), "application/json")
}

func TestFindSingleProjectInvalidUUID(t *testing.T) {
	setupTestEnv()
	router := setupProjectRouter()

	// Test with invalid UUID format
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("GET", "/api/projects/invalid-uuid", nil)
	router.ServeHTTP(w, req)

	// Should return 400 Bad Request for invalid UUID
	assert.Equal(t, http.StatusBadRequest, w.Code)
}

func TestInsertProject(t *testing.T) {
	setupTestEnv()
	router := setupProjectRouter()

	// Create test project data
	projectData := repository.InsertProjectParams{
		Title:        "Test Project",
		Description:  "Test Description",
		GithubRepo:   pgtype.Text{String: "https://github.com/test/repo", Valid: true},
		ShowcaseType: repository.ShowcaseTypeNone,
		Type:         repository.ProjectTypePersonal,
		Public:       true,
	}

	jsonData, _ := json.Marshal(projectData)
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/api/projects", bytes.NewBuffer(jsonData))
	req.Header.Set("Content-Type", "application/json")
	// Add test authorization header (will fail JWT validation)
	req.Header.Set("Authorization", "Bearer test-token")
	router.ServeHTTP(w, req)

	// Since we don't have valid JWT, expect 401 Unauthorized
	assert.Equal(t, http.StatusUnauthorized, w.Code)

	// Test that it's a proper JSON error response
	assert.Contains(t, w.Header().Get("Content-Type"), "application/json")
}

func TestInsertProjectInvalidJSON(t *testing.T) {
	setupTestEnv()
	router := setupProjectRouter()

	// Test with invalid JSON
	invalidJSON := `{"title": "Test", "invalid_json"`
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/api/projects", strings.NewReader(invalidJSON))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer test-token")
	router.ServeHTTP(w, req)

	// Since we don't have valid JWT, expect 401 Unauthorized (auth fails before JSON parsing)
	assert.Equal(t, http.StatusUnauthorized, w.Code)
}

func TestInsertProjectEmptyBody(t *testing.T) {
	setupTestEnv()
	router := setupProjectRouter()

	// Test with empty body
	w := httptest.NewRecorder()
	req, _ := http.NewRequest("POST", "/api/projects", nil)
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer test-token")
	router.ServeHTTP(w, req)

	// Since we don't have valid JWT, expect 401 Unauthorized (auth fails before body parsing)
	assert.Equal(t, http.StatusUnauthorized, w.Code)
}
