const express = require('express');
const { requireSignIn } = require('../controllers/userControlller');
const { createPostController, getAllPostsController } = require('../controllers/createPostControllers');

//router object
const router = express.Router();

// create POST \\ POST

router.post('/create-post', requireSignIn, createPostController)
router.get('/get-all-post',getAllPostsController)
//export 
module.exports=router;


