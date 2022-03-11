const fs = require("fs");

fs.unlink("mySecondFile.txt", (err, file) => {
  if (err) {
    console.log("File Deleted");
    throw err;
  }
});
