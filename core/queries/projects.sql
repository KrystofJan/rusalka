-- name: FindAllProjects :many
SELECT *
FROM projects;

-- name: FindProjectById :one
SELECT * 
FROM projects
WHERE id = $1;

-- name: InsertProject :one
INSERT INTO projects (
    id, title, description, github_repo, showcase_type, type, public
) VALUES (
    uuid_generate_v4(), $1, $2, $3, $4, $5, $6
) returning *;
