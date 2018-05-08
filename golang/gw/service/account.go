package service

import (
	"fmt"
	"net/http"
)

func NewAccountService(port int) *http.Server {
	routes := http.NewServeMux()
	routes.HandleFunc("/account", func(w http.ResponseWriter, r *http.Request) {
		// add-by-gateway
		body := `{"token":"token-abc123"}`
		header := fmt.Sprintf(`{"add-by-gateway":"%s"}`, r.Header.Get("add-by-gateway"))

		res := fmt.Sprintf(`{"body":%s,"header":%s}`, body, header)
		w.Write([]byte(res))
	})

	return &http.Server{
		Handler: routes,
		Addr:    fmt.Sprintf(":%d", port),
	}
}
