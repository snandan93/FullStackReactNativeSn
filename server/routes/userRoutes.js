const express =require('express')
const { registerController, loginController, updateUserController, requireSignIn } = require('../controllers/userControlller')

//router object
const router =express.Router()

//routes
router.post('/register', registerController)
router.post('/login',loginController)

//update put
router.put('/update-user',requireSignIn, updateUserController)
module.exports=router
