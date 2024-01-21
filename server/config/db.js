const mongoose= require('mongoose')
const colors=require('colors')

const connectDb= async ()=>{
    try {
    await mongoose.connect(process.env.MONGO_URL) 
    console.log(`connected to db ${mongoose.connection.host}`.bgCyan.white)
    }catch(err){
console.log(`error in conncetion ${err}`.bgRed.white)
    }
}
module.exports=connectDb