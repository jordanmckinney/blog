<center> <h2>HTTP Client & Server</h2> </center>

A simple web [client and server](https://github.com/jordanmckinney/http_client_server) written in C. The client takes a URI as its argument and performs an HTTP 1.0 `GET` request, printing the returned header data and response body.

Sample client output:

```
$ ./SimpClient
Open URI: http://httpbin.org/ip

---Request begin---
GET /ip HTTP/1.0
Host: httpbin.org

---Request end---
HTTP request sent, awaiting response...

---Response header---
HTTP/1.1 200 OK
Server: nginx
Date: Sat, 17 Sep 2016 22:04:34 GMT
(...)

--- Response body ---
{
  "origin": "XX.XX.1.172"
}
```
