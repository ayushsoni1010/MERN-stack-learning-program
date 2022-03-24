const formidable = require("formidable");
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url == "/fileupload") {
    let form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {
      res.write("<h1>File Uploaded</h1>");
      let oldPath = files.filetoupload.filepath;
      let newPath =
        "D:/primary/MERN-stack-learning-program>" +
        files.filetoupload.originalFilename;
      fs.rename(oldPath, newPath, (err) => {
        if (err) throw err;
        res.write("File uploaded and moved!");
        res.end();
      });
    });
  } else {
    res.writeHead(200, { "Content-type": "text/html" });
    res.write(
      '<form action="fileupload" method="post" enctype="multipart/form-data">'
    );
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write("</form>");
    console.log("Data Displayed");
    res.end();
  }
});

server.listen(5000);
