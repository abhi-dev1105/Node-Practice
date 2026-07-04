const httpserver = require("http");  //http module extends event emitter class

const server = httpserver.createServer((req,res)=>{

  res.writeHead(200,{"Content-Type":"text/plain1"});
  res.end("hello from node");
});

server.listen(3000,()=>{
  console.log("server running on port 3000");
});