import express from 'express';
import {auth, admin} from '../middleware/authentication';
import {createblog, readOneBlog, readAllblogs, deleteBlog,updateBlog} from '../controllers/blogController';
import commentController from '../controllers/commentController'

const blogRouter = express.Router();

blogRouter.post('/insertBlog', auth,createblog);
// blogRouter.get('/selectBlog/:id', auth,readOneBlog);
blogRouter.get('/selectBlogs',readAllblogs);
blogRouter.delete('/deleteBlog/:id', auth,deleteBlog);
blogRouter.put('/updateBlog/:id', auth,updateBlog);

// comments Routes
blogRouter.post('/comments/:_id', auth, commentController.addComment)
blogRouter.get('/comments/:_id', commentController.readComment)

export default blogRouter;