const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home page");
  }
  if (req.url === "/about") {
    res.end("Here is the about page");
  }
  res.end(`
        <h1>Oops!!</h1>
        <p>We can't seem to find the page what you're looking for</p>
        <a href="/">back home</a>
    `);
});

server.listen(5000);
