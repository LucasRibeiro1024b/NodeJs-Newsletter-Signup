const express = require('express');
const bodyParser = require('body-parser');
const request = require("request");
const { sendFile } = require('express/lib/response');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

app.get("/", (req, res)=>{
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", (req, res)=>{
  
});

app.listen(3000, function(){
  console.log("Server running in port 3000");
});