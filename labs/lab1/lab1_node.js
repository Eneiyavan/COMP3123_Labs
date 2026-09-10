/**
    Run a node.js file on the command line via 
    localhost 127.0.0.1 without needing a html file 
 */
 var http =  require("http")

 // Remember callback function best written in arrow syntax

 http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"})
    response.end("Hello World - The sever is up and running")
 }).listen(8088)