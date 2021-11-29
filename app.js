const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items = ['Buy Food','Cook the food','Eat the food'];
const workItems = [];

app.get('/', (req, res) => {
  let day = date.getDate();
  res.render('list', {ListTitle: day, newListItems: items});
});

app.post("/",function(req,res){
  item = req.body.newItem;

  if(req.body.list  === 'Work List'){
   workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work",function(req,res){

  res.render('list',{ListTitle: "Work List",newListItems: workItems})
});

// app.get("/",function(req,res){
//   res.send("Connection Established");
// })

app.listen(3000,function(req,res){
  console.log("Connected on Port 3000");

})
