package main

import (
	"fmt"
	"github.com/beary/practices/golang/gw/service"
	"log"
	"net"
	"net/http"
	"net/http/httputil"
	"net/url"
)

func main() {
	accountService := service.NewAccountService(8001)
	blogService := service.NewBlogService(8002)

	mux := http.NewServeMux()
	mapper(mux, "/account", accountService)
	mapper(mux, "/blog", blogService)

	gw := &http.Server{
		Handler: mux,
		Addr:    ":8080",
	}

	go Run(accountService, func(addr *net.TCPAddr) {
		fmt.Printf("Account service. port: %d\n", addr.Port)
	})
	go Run(blogService, func(addr *net.TCPAddr) {
		fmt.Printf("Blog service. port: %d\n", addr.Port)

	})
	Run(gw, func(addr *net.TCPAddr) {
		fmt.Printf("Api gateway. port: %d\n", addr.Port)
	})

}

func mapper(mux *http.ServeMux, pattern string, server *http.Server) {
	u, err := url.Parse(fmt.Sprintf("http://localhost%s", server.Addr))
	if err != nil {
		log.Fatal(err)
	}
	proxy := httputil.NewSingleHostReverseProxy(u)
	mux.HandleFunc(pattern, func(w http.ResponseWriter, r *http.Request) {
		r.Header.Add("add-by-gateway", "This content was added by api gateway")
		proxy.ServeHTTP(w, r)
	})
}
