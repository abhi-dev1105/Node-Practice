const httpserver = require("http");  //http module extends event emitter class
const fs= require("fs");

const server = httpserver.createServer((req,res)=>{
  const superhero={
    firstName:"tag",
    lastName:"star"
  }
  res.writeHead(200,{"Content-Type":"text/html"});
  const html =fs.createReadStream("./index.html").pipe(res); 
  
});

server.listen(3000,()=>{
  console.log("server running on port 3000");
});