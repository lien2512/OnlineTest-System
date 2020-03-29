var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();
var port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(cors());
app.use( bodyParser.urlencoded({extended: false}) );
app.use(bodyParser.json({ limit: "50mb", extended: true }));

var users = require("./Routes/users");

app.use("/users", users)

app.listen(port, function(){
    console.log("server is running on port" + port)
})