# Go 微服务网关
`service/`下为两个后端服务，`gw.go`中启动服务和 api 网关，使用 httputil 包中的[ReverseProxy](https://golang.org/pkg/net/http/httputil/#NewSingleHostReverseProxy)进行代理，在请求服务之前可以在网关中做验证并插入业务请求头。

