var http = require('http')
var fs=require('fs');



var server = http.createServer(function(req,res){

    if(req.url==="/"){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>Homepage</h1>")
        res.end()
     
    }

    else if(req.url==='/contact'){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>Contact page</h1>")
        res.end()

    }
   
    else if(req.url==='/about'){
        res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>About page</h1>")
        res.end()
        
    }
    else if(req.url==='/file-write'){
        fs.writeFile('demo.txt','Hello World',function(error){
            if(error){
                res.writeHead(200,{'content-Type':'text/html'})
        res.write("<h1>Failed</h1>")
        res.end()

            }
            else{
                res.writeHead(200,{'content-Type':'text/html'})
                res.write("<h1>Created a demo text</h1>")
                res.end()

            }
        })
       
        
    }
   
})

server.listen(3000);
console.log('successful');