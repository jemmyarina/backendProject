export const validateblog = (req, res, next) => {
    const blog = req.body;
    if (!blog.bTitle) res.status(400).json({message: "Please fill blog title "});
    else if (!blog.bContent) res.status(400).json({message: "Please fill the blog body"});
    // else if (!blog.bPublisher) res.status(400).json({message: "please include the blog publisher"});
    else next();
}