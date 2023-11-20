const http = require('http')
 function createSimpleHTTPServer(){
    const server= http.createServer((req,res)=>{
            res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>Welcome to the Simple HTTP Server!</h1>")    
        

    })
    
  
    server.listen(8080,()=> {
        console.log('Server running at http://localhost:8080/');
      });
}
createSimpleHTTPServer();