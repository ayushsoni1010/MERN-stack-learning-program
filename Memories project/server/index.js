const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const postRoutes = require("./routes/posts.js");

require("dotenv").config();

console.log(process.env.DATABASE_URI)

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.DATABASE_URI;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDb database connected successfully");
});

app.use("/posts", postRoutes);
app.listen(PORT, () => {
  console.log(`Serve is running on port: ${PORT}`);
});
