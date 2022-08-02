const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res) {
  console.log(req.body);
  var result = Number(req.body.num1) + Number(req.body.num2);
  res.send("The result is " + result);
});

app.listen(3000, function() {
  console.log("Started calculator sever at port 3000 and directory " + __dirname);
});
