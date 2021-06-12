const express = require("express");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine','ejs');
var names = [];
app.get("/",function(req, res){
    var options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    var today  = new Date();
    
    var day = today.toLocaleDateString("en-US", options);
   res.render("index",{kindofday:day,newitems:names});
});

app.post("/",function(req, res){
    var name = req.body.item;
    names.push(name);
    res.redirect("/");
});

app.listen(3000,function(req,res){
    console.log("server started");
});