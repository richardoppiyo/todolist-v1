const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}))

var items = ['Buy Food','Cook the food','Eat the food'];

app.get('/', (req, res) => {

var today = new Date();
var options = {
  weekday: "long",
  day: "numeric",
  month: "long"
};


var day = today.toLocaleDateString("en-US",options);

  res.render('list', {kindOfDay: day, newListItems: items});
});

app.post("/",function(req,res){
  item = req.body.newItem;
  console.log(item);

   items.push(item);

  res.redirect("/");
});


// app.get("/",function(req,res){
//   res.send("Connection Established");
// })

app.listen(3000,function(req,res){
  console.log("Connected on Port 3000");

})
