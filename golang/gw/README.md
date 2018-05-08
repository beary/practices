# Go 微服务器网关
`service/`下为两个后端服务器，`gw.go`中启动服务，使用 httputil 包中的[ReverseProxy](https://golang.org/pkg/net/http/httputil/#NewSingleHostReverseProxy)进行代理，在请求之前可以在网关层做验证并插入业务请求头。

