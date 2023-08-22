const express = require("express");
const bodyParser=require("body-parser");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
})

app.post("/",function(req,res){
   //us to take input console.log(req.body)
   var num1=Number(req.body.n1);

   var num2=Number(req.body.n2);

   var result=Number(num1+num2);
    res.send("The result of the calculation is:"+result);
})
app.listen(3000,function(){
    console.log("Server is running on port 3000");
});

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
  })
  
  app.post("/bmicalculator",function(req,res){
      var Weight=parseFloat(req.body.n1);
      var Height=parseFloat(req.body.n2);
  
      var bmi=Number(Weight/(Height*Height));
  
      res.send("Your BMI is"+bmi);
  })
  