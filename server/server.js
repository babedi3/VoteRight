var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var index = require("./routes/index");

//need to decide what info are we going to get and post to the db
var dbinfo = require("./routes/dbinfo");

var app = express();

var port = 3002;

app.listen(port, function(){
  console.log("Server running on port", port);
})

//views
//this will tell our app that our views are in folder called views
app.set("views", path.join(__dirname, "views"));
//ejs is the template engine
app.set("view engine", "ejs");
app.engine("html", require("ejs").renderFile);

//Body parser Middle ware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.use("/", index);
app.use("/api", dbinfo);