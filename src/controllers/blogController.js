import Blog from '../models/blogModel';

//  INSERT A BLOG 
export const createblog = async (req,res,next)=>{
    try {
        const { bTitle, bContent} = req.body;
        const { firstName, lastName } = req.user;

        const blog = await Blog.findOne({bTitle});
        
        if (blog) return res.status(400).json({msg: 'Blog published before'})
        
        const newBlog = await Blog({
            bTitle,
            bPublisher: { firstName, lastName },
            bContent
        })

        const savedBlog = await newBlog.save();

        return res.status(201).json({msg: 'blog created', savedBlog})
    } catch (err) {
        return res.status(500).json({msg: err.message})
    }
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