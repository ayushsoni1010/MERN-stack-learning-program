const upper = require("upper-case");
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/plain" });
  res.write(upper.upperCase("Server Started"));
  res.write("Hey Rajeev");
  console.log("Server Logging in VS Code");
  res.end();
});

server.listen(5000);
