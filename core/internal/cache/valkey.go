package cache

import (
	"os"

	"github.com/KrystofJan/rusalka/core/lib"
	"github.com/valkey-io/valkey-go"
)

func GetValkeyClient() (valkey.Client, error) {
	client, err := valkey.NewClient(valkey.ClientOption{InitAddress: []string{os.Getenv("VALKEY_URL")}})
	if err != nil {
		return nil, lib.ValkeyConnError
	}

	return client, nil

}
