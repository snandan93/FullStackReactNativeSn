const express = require('express');
const { requireSignIn } = require('../controllers/userControlller');
const { createPostController } = require('../controllers/createPostControllers');

//router object
const router = express.Router();

// create POST \\ POST

router.post('/create-post', requireSignIn, createPostController)

//export 
module.exports=router;


