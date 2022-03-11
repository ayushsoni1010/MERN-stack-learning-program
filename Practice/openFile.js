const openFSFile = require("fs");

openFSFile.open("mynewfile2.txt", "w", (err, file) => {
  if (err) {
    console.log("err");
    throw err;
  }
  console.log(file);
});
