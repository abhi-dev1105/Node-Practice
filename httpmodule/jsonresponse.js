const httpserver = require("http");  //http module extends event emitter class

const server = httpserver.createServer((req,res)=>{
  const superhero={
    firstName:"tag",
    lastName:"star"
  }
  res.writeHead(200,{"Content-Type":"application/json"});
  res.end(JSON.stringify(superhero)); // to send json response
});

server.listen(3000,()=>{
  console.log("server running on port 3000");
});