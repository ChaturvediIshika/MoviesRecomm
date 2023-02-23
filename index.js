const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const Movie=require("./movie");

mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(()=>{
    console.log("OK");
}).catch((err)=>{
    console.log(err);
})

app.set('view engine','ejs');
app.set("views",path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
})

// console.log(Movie.find());

app.get('/search',async(req,res)=>{
    const {q}=req.query;
    const movies=await Movie.find({name:{$regex:`^${q}`}});
    res.send(movies);
    
})


app.listen(3000,()=>{
    console.log("connected");
})