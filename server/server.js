const express = require('express')
const cors = require('cors')
const dotenv= require('dotenv')
const colors= require ('colors')
const morgan = require('morgan')
const connectDb = require('./config/db')

//dotenv 
dotenv.config()
//mongodb conncection
connectDb()
//Rest object 

const app = express()


//middleware 
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


//ROuTES
app.use('/api/v1/auth', require("./routes/userRoutes"));
// app.get('',(req, res)=>{
// res.status(200).json({
//     success:true,
//     message:'Welcome to full stack '
// });
// })
//Port

const PORT = process.env.PORT || 8080

//listen
app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`.bgGreen.white)
})