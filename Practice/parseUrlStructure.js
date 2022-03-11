const url = require("url");
const address = "http://localhost:8080/default.htm?year=2017&month=february";

const q = url.parse(address, true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

const data = q.query;
console.log(data);
