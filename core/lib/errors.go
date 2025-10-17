package lib

import "errors"

// valkey
var (
	ValkeyConnError = errors.New("Valkey connection error")
	ValkeyGetError  = errors.New("There was a problem getting the value from the cache")
	ValkeySetError  = errors.New("There was a problem setting the cache value")
)

// jwk
var (
	JWKFetchError = errors.New("There was a problem fetching the JWK")
)
