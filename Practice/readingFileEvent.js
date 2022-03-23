const file = require("fs");
const readFile = file.createReadStream("./myfirstFile.txt");

readFile.on("open", (data) => {
  console.log(data);
  console.log("The File is open");
});
