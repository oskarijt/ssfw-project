const multer = require('multer');       // file storing middleware
const express = require('express');
const router = express.Router();
const checkAuth = require('../auth/auth');
const PostController = require('../controllers/PostController');

/**
 * @api {get} /posts/ List all posts
 * @apiGroup Posts
 * @apiSuccess {Object[]} posts Post's list
 * @apiSuccess {author} posts.author Post author
 * @apiSuccess {category} posts.category Post category
 * @apiSuccess {description} posts.description Post description
 * @apiSuccess {imagePath} posts.imagePath Post imagePath
 * @apiSuccess {rating} posts.rating Post rating
 * @apiSuccess {thumbnailPath} posts.thumbnailPath Post thumbnailPath
 * @apiSuccess {title} posts.title Post title
 * @apiSuccess {_id} posts._id Post _id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      author: "5ccc92372e30895a7fc72bad"
 *      category: "Animal"
 *      description: "This camel ride was bumpy as hell!!"
 *      imagePath: "/photo-storage/photo-1556911417719.jpeg"
 *      rating: "3"
 *      thumbnailPath: "/photo-storage/thumbnail/photo-1556911417719.jpeg"
 *      title: "Camel Ride"
 *      _id: "5ccc9539e846d25711366165"
 *    }]
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Not authenticated error
 *  HTTP/1.1 401 E
 *    [{
 *      message: "Auth failed"
 *    }]
 */
router.get('/', checkAuth, PostController.getPosts);

/**
 * @api {get} /posts/my List user posts
 * @apiGroup Posts
 * @apiSuccess {Object[]} posts Post's list
 * @apiSuccess {author} posts.author Post author
 * @apiSuccess {category} posts.category Post category
 * @apiSuccess {description} posts.description Post description
 * @apiSuccess {imagePath} posts.imagePath Post imagePath
 * @apiSuccess {rating} posts.rating Post rating
 * @apiSuccess {thumbnailPath} posts.thumbnailPath Post thumbnailPath
 * @apiSuccess {title} posts.title Post title
 * @apiSuccess {_id} posts._id Post _id
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      author: "5ccc92372e30895a7fc72bad"
 *      category: "Animal"
 *      description: "This camel ride was bumpy as hell!!"
 *      imagePath: "/photo-storage/photo-1556911417719.jpeg"
 *      rating: "3"
 *      thumbnailPath: "/photo-storage/thumbnail/photo-1556911417719.jpeg"
 *      title: "Camel Ride"
 *      _id: "5ccc9539e846d25711366165"
 *    }]
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Not authenticated error
 *  HTTP/1.1 401 Unauthorized
 *    [{
 *      message: "Auth failed"
 *    }]
 */
router.get('/my', checkAuth, PostController.myPosts);
  
/**
 * @api {delete} /posts/:id Delete post
 * @apiGroup Posts
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      message: "Review deleted!"
 *    }]
 * @apiErrorExample {json} Delete error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Not authenticated error
 *  HTTP/1.1 401 Unauthorized
 *    [{
 *      message: "Auth failed"
 *    }]
 */
router.delete('/:id', checkAuth, PostController.deletePost);
  
/**
 * @api {post} /posts/upload Upload a new review
 * @apiGroup Posts
 * @apiSuccess {author} posts.author Post author
 * @apiSuccess {category} posts.category Post category
 * @apiSuccess {description} posts.description Post description
 * @apiSuccess {imagePath} posts.imagePath Post imagePath
 * @apiSuccess {rating} posts.rating Post rating
 * @apiSuccess {thumbnailPath} posts.thumbnailPath Post thumbnailPath
 * @apiSuccess {title} posts.title Post title
 * @apiSuccess {_id} posts._id Post _id
 * @apiSuccess {photo} posts.photo Post photo (req.file)
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      message: "Upload Complete!"
 *    }]
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.post('/upload', multer(PostController.multerConfig).single('photo'), (req, res, next) => {
    next();
});
  
router.use('/upload', PostController.uploadPost);

module.exports = router;
