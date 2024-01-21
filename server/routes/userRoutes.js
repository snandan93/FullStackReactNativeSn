const express =require('express')
const { registerController, loginController } = require('../controllers/userControlller')

//router object
const router =express.Router()

//routes
router.post('/register', registerController)
router.post('/login',loginController)
module.exports=router
