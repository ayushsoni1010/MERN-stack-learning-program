const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      console.log("Reading File");
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(data);
    return res.end("Got the Data");
  });
});

server.listen(5000);
