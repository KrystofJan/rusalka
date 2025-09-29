package error

type ErrorCode int

const (
	RecordNotFound      ErrorCode = 1001
	DatabaseError       ErrorCode = 1002
	AuthenticationError ErrorCode = 1003
	ResourceError       ErrorCode = 1004
	RequestError        ErrorCode = 1005
)

type HttpError struct {
	Message string
	Code    ErrorCode
	Error   error
}
