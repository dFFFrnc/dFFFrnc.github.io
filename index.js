//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/call_back');

// const CallBack = mongoose.model('CallBack', { name: String }, { phone: Number });

const callBackSchema = {
  name: String,
  phone: String
};

const CallBack = mongoose.model('callBack', callBackSchema);

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){
  res.render("index", { });
});


// додавання в базу запиту на дзвінок
app.post("/", function(req, res){

  const phoneNumber = req.body.phoneNumber;
  const name = req.body.name;

  const callBack = new CallBack ({
    name: name,
    phone: phoneNumber
  });
  callBack.save();
  console.log("New callback id_" + callBack._id + " added");
  res.redirect("/");
});

// можна спробувати додавати дані з цієї форми в мейлчамп

app.get("/about", function(req, res){
  res.render("about", { });
});

app.get("/contacts", function(req,res){
  res.render("contacts",{ });
});

app.get("/category", function(req,res){
  res.render("category",{ });
});

// блок зворотнього зв'язку


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
