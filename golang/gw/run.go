package main

import (
	"net"
	"net/http"
)

func Run(server *http.Server, callback func(addr *net.TCPAddr)) error {
	addr, err := net.ResolveTCPAddr("tcp", server.Addr)
	if err != nil {
		return err
	}
	listener, err := net.ListenTCP("tcp", addr)
	if err != nil {
		return err
	}
	callback(addr)
	return server.Serve(listener)
}
