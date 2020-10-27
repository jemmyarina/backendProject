import express from 'express';
import {auth} from '../middleware/authentication';
import {createblog, readOneBlog, readAllblogs, deleteBlog,updateBlog} from '../controllers/blogController';

const blogRouter = express.Router();

blogRouter.post('/insertBlog', auth,createblog);
blogRouter.get('/selectBlog/:id', auth,readOneBlog);
blogRouter.get('/selectBlogs',readAllblogs);
blogRouter.delete('/deleteBlog/:id', auth,deleteBlog);
blogRouter.put('/updateBlog/:id', auth,updateBlog);

export default blogRouter;