-- name: FindAllAccounts :many
SELECT *
FROM accounts;

-- name: FindAccountById :one
SELECT * 
FROM accounts
WHERE id = $1;
