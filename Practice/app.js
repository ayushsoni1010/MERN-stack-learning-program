const upper = require("upper-case");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  res.write(upper.upperCase("Server Started"));
  console.log("Logging results");
  res.end();
});

server.listen(5000);
