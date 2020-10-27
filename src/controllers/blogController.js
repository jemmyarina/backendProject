import Blog from '../models/blogModel';

//  INSERT A BLOG 
export const createblog = (req,res,next)=>{
    Blog.create(req.body)
     .then((blog) => {
        console.log('Blog Created ', blog);
        res.statusCode = 200;
        res.json(blog);
    }, (err) => next(err))
    .catch((err) => next(err));
 }

 //  SELECT ONE BLOG BY ID
 export const readOneBlog = (req, res, next) =>{
    const {id}=req.params;
    Blog.findById(id)
    .then((blogs) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blogs);
    }, (err) => next(err))
    .catch((err) => next(err));
 }

//  SELECT ALL BLOGS 
 export const readAllblogs = (req, res, next) =>{
    Blog.find({})
    .then((blogs) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(blogs);
    }, (err) => next(err))
    .catch((err) => next(err));
 }


 // DELETING A BLOG
 
 export const deleteBlog = async (req, res, next) => {    
     let { id } = req.params;        
      
         const existBlog = await Blog.find({ _id: id });  
        if (existBlog.length) {  
        try {                
            const deletedBlog = await Blog.deleteOne({ _id: id });                
            res.status(200).send(`Blog is deleted ${existBlog}`);           
         }            
            catch (error) {    
                res.status(500).json({error});                    
             };       
         }        
        else { res.status(404).json({ status: 403, error: 'Blog does not exist' });        
        };    
 }


// UPDATING A BLOG
 export const updateBlog = async (req, res, next) =>{
    try {
       const blog = await Blog.findByIdAndUpdate({ _id: req.params.id }, req.body);
       const updatedBlog = await Blog.findOne({ _id: req.params.id });
       res.status(200).send(updatedBlog);
    }
    catch {
           res.status(400).json(`Error: ${error}`);
    }
}