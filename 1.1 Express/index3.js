import express from "express";

const app = express();
const port =3000;

app.listen(port, ()=>{
    console.log("app is listeninig")
})

app.get("/" ,(req,res)=>{
res.render("index.ejs"); 
})

app.post("/recipe",(req,res)=>{ 
   let {name} = req.body;
    res.render("solution.ejs");
})