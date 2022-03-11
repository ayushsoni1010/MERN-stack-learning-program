const http = require("http");
const appendFSFile = require("fs");

const server = http.createServer((req, res) => {
  appendFSFile.appendFile("myfirstFile.txt", "Hello Content!", (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log("Server started");
  });
});

server.listen(5000);
