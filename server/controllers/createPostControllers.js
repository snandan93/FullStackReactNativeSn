//create POSt 

const postModel = require("../models/postModel");

const createPostController= async(req, res)=>{
    try {
        const {title, description}=req?.body

        //validate 
        if (!title || !description){
return res.status(500).send({
    success:false,
    message:'Please provide all fields'
})
        }

        const post = await postModel({
            title, 
            description,
            postedBy:req.auth._id
        }).save();
        res.status(200).send({
            success:true,
            message:'Post Created ',
            post

        })
        console.log(req)
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Error in create post api',
            error
        })
    }

};

module.exports={createPostController}