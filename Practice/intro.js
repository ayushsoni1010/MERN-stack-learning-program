const http = require("http");
const date = require("./myfirstModule");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write("The date and time currently: " + date.myDateTime());
  res.write( "  " + req.url + "  ");
  res.end("Hello World");
  console.log("Server started");
});

server.listen(5000);
