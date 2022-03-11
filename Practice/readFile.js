const http = require("http");
const readFSFile = require("fs");

const server = http.createServer((req, res) => {
  readFSFile.readFile("demofile.html", (err, data) => {
    res.writeHead(200, { "Content-type": "text/html" });
    if (err) {
      console.log(err);
      throw err;
    }
    res.write(data);
    res.end();
    console.log("Server started");
  });
});

server.listen(5000);
