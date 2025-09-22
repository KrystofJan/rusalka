// id, email, role, created\_at


type Roles int
const (
    Admin ServerState = iota
    User
    Customer
)
var roles = map[ServerState]string{
    Admin:      "admin",
    User: "connected",
    Customer:  "customer",
}
func (role Role) String() string {
    return roles[ss]
}

type User struct {
    Id string 
    Role Roles
    FirstName string
    LastName string
    ProfilePicUrl string
}

