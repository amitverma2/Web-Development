const express = require("express");
const app = express();

app.get("/", function(req, res) {
  res.send("Hello, world from node express!");
});

app.get("/contact", function(req, res) {
  res.send("Reach me at amit.verma2@gmail.com");
});

app.get("/about", function(req, res) {
  res.send("This is Amit Verma. I am learning backend programming.");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
