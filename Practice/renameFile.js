const fs = require("fs");

fs.rename("mynewfile2.txt", "myrenamedfile.txt", (err) => {
  if (err) {
    throw err;
  }
  console.log("File Renamed");
});
