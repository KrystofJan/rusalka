package error

type ErrorCode int

const (
	RecordNotFound ErrorCode = 1001
	DatabaseError  ErrorCode = 1002
)

type HttpError struct {
	Message string
	Code    ErrorCode
	Error   error
}
