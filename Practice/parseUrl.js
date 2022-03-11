const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  let q = url.parse(req.url, true).query;
  let text = q.year + " " + q.month;
  res.end(text);
  console.log("Server started");
});

server.listen(5000);
