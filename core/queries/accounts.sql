-- name: FindAllAccounts :many
SELECT *
FROM accounts;

-- name: FindAccountById :one
SELECT * 
FROM accounts
WHERE id = $1;

-- name: InsertAccount :one
INSERT INTO accounts (
    id, first_name, last_name, role
) values (
    $1, $2, $3, $4
) returning *;
