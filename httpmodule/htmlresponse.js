const httpserver = require("http");  //http module extends event emitter class
const fs= require("fs");

const server = httpserver.createServer((req,res)=>{
  const superhero={
    firstName:"tag",
    lastName:"star"
  }
  res.writeHead(200,{"Content-Type":"text/html"});
  const html =fs.readFileSync("./index.html","utf-8"); //using sync beacuse the response has to be after reading the html file. but the short coming is it will store all the content of the file in the memory,which will consume lot of memory, instead using streams is a better approach.
  res.end(html); // to send json response
});

server.listen(3000,()=>{
  console.log("server running on port 3000");
});