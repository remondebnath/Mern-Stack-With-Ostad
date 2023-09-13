const fs= require('fs');
const http= require('http');

const server= http.createServer(function(req,res){


if(req.url==="/"){
     fs.readFile('home.html', function(error,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data);
        res.end()
     });
  
}

else if(req.url==="/contact"){
    let data= fs.readFileSync('contact.html');
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data);
    res.end()
}

else if(req.url==="/about"){
    let data= fs.readFileSync('about.html');
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write(data);
    res.end()
}







})
server.listen(8000);
console.log("Successfull")