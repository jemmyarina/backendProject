import express from 'express';
import {createblog, readOneBlog, readAllblogs, deleteBlog,updateBlog} from '../controllers/blogController';

const blogRouter = express.Router();

blogRouter.post('/insertBlog', createblog);
blogRouter.get('/selectBlog/:id', readOneBlog);
blogRouter.get('/selectBlogs', readAllblogs);
blogRouter.delete('/deleteBlog/:id', deleteBlog);
blogRouter.put('/updateBlog/:id', updateBlog);

export default blogRouter;