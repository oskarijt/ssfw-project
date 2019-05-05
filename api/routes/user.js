const express = require('express');
const router = express.Router();
const passport = require('passport');

const UserController = require('../controllers/UserController');

/**
 * @api {post} /user/register Register new user
 * @apiGroup User
 * @apiSuccess {username} user.username User username
 * @apiSuccess {password} user.password User password
 * @apiSuccess {password2} user.password2 User password2
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      auth: true
 *      message: "Token for you sir!"
 *      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibW9yamVudHRlcyIsImlkIjoiNWNjZjA2Njg3OTljY2IwNmU1YTM5MWQ4IiwiaWF0IjoxNTU3MDcxNDY0LCJleHAiOjE1NTcxNTc4NjR9.Gf9mXOGLJONxoKjw3RnA8aOKNc8ktP0tkDqmrTUpw_E"
 *      user: "morjenttes"
 *      user_id: "5ccf0668799ccb06e5a391d8"
 *    }]
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Bad Request
 *  HTTP/1.1 401 E
 *    [{
 *      message: "Passwords don't match"
 *    }]
 */
router.post('/register', UserController.userSignup);

/**
 * @api {post} /user/login User login
 * @apiGroup User
 * @apiSuccess {username} user.username User username
 * @apiSuccess {password} user.password User password
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      auth: true
 *      message: "Token for you sir!"
 *      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoibW9yamVudHRlcyIsImlkIjoiNWNjZjA2Njg3OTljY2IwNmU1YTM5MWQ4IiwiaWF0IjoxNTU3MDcxNDY0LCJleHAiOjE1NTcxNTc4NjR9.Gf9mXOGLJONxoKjw3RnA8aOKNc8ktP0tkDqmrTUpw_E"
 *      user: "morjenttes"
 *      user_id: "5ccf0668799ccb06e5a391d8"
 *    }]
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} Bad Request
 *    HTTP/1.1 401 Unauthorized
 */
router.post('/login', passport.authenticate('local'), UserController.userLogin);

/**
 * @api {get} /user/logout User logout
 * @apiGroup User
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    [{
 *      auth: null
 *      token: null
 *    }]
 * @apiErrorExample {json} Error
 *    HTTP/1.1 500 Internal Server Error
 */
router.get('/logout', UserController.userLogout);

module.exports = router;