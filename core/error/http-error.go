package error

type ErrorCode int

const (
	RecordNotFound      ErrorCode = 1001
	DatabaseError       ErrorCode = 1002
	AuthenticationError ErrorCode = 1003
)

type HttpError struct {
	Message string
	Code    ErrorCode
	Error   error
}
