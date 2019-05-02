const multer = require('multer');       // file storing middleware
const express = require('express');
const router = express.Router();
const checkAuth = require('../auth/auth');
const PostController = require('../controllers/PostController');

// Get Posts
router.get('/', checkAuth, PostController.getPosts);
  
// Delete Post
router.delete('/:id', PostController.deletePost);
  
// Post Post and handle file
router.post('/upload', checkAuth, multer(PostController.multerConfig).single('photo'), (req, res, next) => {
    next();
});
  
router.use('/upload', PostController.uploadPost);

module.exports = router;