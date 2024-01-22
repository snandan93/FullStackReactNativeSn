const mongoose= require('mongoose')

//schema
const postSchema= new mongoose.Schema({

    title:{
        type:String,
        required:[true, 'please add a post title']
    },
    description:{
        type:String,
        required:[true, 'please add a post description']
    },
    postedBy:{
        type:mongoose.Schema.ObjectId,
        ref:'User',
        required:true
    }
},{timestamps:true})

module.exports=mongoose.model('post',postSchema)