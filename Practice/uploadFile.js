var http = require('http')
var formidable = require('formidable')
var fs = require('fs')

const server = http.createServer((req, res) => {
  if (req.url === '/fileupload') {
    var form = new formidable.IncomingForm()
    form.parse(req, ((err, fields, files) => {
      var oldPath = files.filetoupload.filepath;
      var newPath = "D:primaryMERN-stack-learning-programPractice";
    }))
  }
})