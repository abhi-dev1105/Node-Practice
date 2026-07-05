const httpserver = require("http");  //http module extends event emitter class
const fs= require("fs");

const server = httpserver.createServer((req,res)=>{
 const name ="abhi";
  res.writeHead(200,{"Content-Type":"text/html"});
  let html =fs.readFileSync("./index.html","utf-8"); 
  html = html.replace("{{name}}",name);//replacing this name variable in html
  res.end(html);
  
});

server.listen(3000,()=>{
  console.log("server running on port 3000");
});