const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const index = require("./routes/index");

//mongo "mongodb+srv://cluster0.njbzf.mongodb.net/<dbname>" --username <username>

//need to decide what info are we going to get and post to the db. creating a template db for now
const dbinfo = require("./routes/dbinfo");

const app = express();

var port = process.env.PORT || 3002;

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