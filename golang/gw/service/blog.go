package service

import (
	"fmt"
	"net/http"
)

func NewBlogService(port int) *http.Server {
	routes := http.NewServeMux()
	routes.HandleFunc("/blog", func(w http.ResponseWriter, r *http.Request) {
		// add-by-gateway
		body := `[{"title":"hello","content":"This is content about hello"},` +
			`{"title":"world","content":"This is content of world."}]`
		header := fmt.Sprintf(`{"add-by-gateway":"%s"}`, r.Header.Get("add-by-gateway"))

		res := fmt.Sprintf(`{"body":%s,"header":%s}`, body, header)
		w.Write([]byte(res))

	})

	return &http.Server{
		Handler: routes,
		Addr:    fmt.Sprintf(":%d", port),
	}
}
