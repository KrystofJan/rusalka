package lib

type ErrorCode int

const (
	RecordNotFound      ErrorCode = 1001
	DatabaseError       ErrorCode = 1002
	AuthenticationError ErrorCode = 1003
	ResourceError       ErrorCode = 1004
	RequestError        ErrorCode = 1005
	CacheError          ErrorCode = 1006
)

type HttpError struct {
	Message string    `json:"message"`
	Code    ErrorCode `json:"code"`
	Error   error     `json:"-"` // Don't serialize the error field
}
