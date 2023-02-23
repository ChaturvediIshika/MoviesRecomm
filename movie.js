const mongoose=require('mongoose');


const movieSchema=new mongoose.Schema({
    name:{type:String,
        required:true,
        maxlength:25},
    year:Number,
    rating:{type:Number,
        required:[true,"Ratings please!!"],
        min:1,
        max:10},
    isWatched:Boolean
})

const Movie=mongoose.model('Movie',movieSchema);

module.exports=Movie;