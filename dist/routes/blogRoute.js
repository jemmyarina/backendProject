"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _authentication = require("../middleware/authentication");

var _blogController = require("../controllers/blogController");

var _commentController = _interopRequireDefault(require("../controllers/commentController"));

var blogRouter = _express["default"].Router();

blogRouter.post('/insertBlog', _authentication.auth, _blogController.createblog); // blogRouter.get('/selectBlog/:id', auth,readOneBlog);

blogRouter.get('/selectBlogs', _blogController.readAllblogs);
blogRouter["delete"]('/deleteBlog/:id', _authentication.auth, _blogController.deleteBlog);
blogRouter.put('/updateBlog/:id', _authentication.auth, _blogController.updateBlog); // comments Routes

blogRouter.post('/comments/:_id', _authentication.auth, _commentController["default"].addComment);
blogRouter.get('/comments/:_id', _commentController["default"].readComment);
var _default = blogRouter;
exports["default"] = _default;