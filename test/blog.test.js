import request from 'supertest';
import config from '../src/config/config';
import Blog from '../src/models/blogModel';
import app from '../src/app';
import generateToken from '../src/helpers/token';
import mongoose from 'mongoose';
 

const dbURL = config.DATABASE_URL_test;

beforeAll(()=>{
    mongoose.connect(dbURL,{            
        useNewUrlParser: true,                
        useUnifiedTopology: true
    });
});

let token;


// POST A BLOG
describe('POSTING DATA IN A BLOG', ()=>{

    let blog;
    
    beforeEach(()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "Samuel",
            lastName : "Musirikare",
            email : "samuel3m@gmail.com",
            password : "samuel123"
        }
        blog = {
            bTitle : "SOFTWARE TESTING MODULE", 
            bContent : "AAAAABBBBBCCCCDDDDEEEEE", 
            bPublisher : user.firstName,
            bPhoto : ""
        }
        token = generateToken(user);
    });

    afterEach(async () => await Blog.deleteMany());
    
    it('It should insert a new blog', async()=>{
        await request (app)
            .post('/insertBlog')
            .set('auth-token', token)
            .send(blog);
        
        expect(blog).not.toBe(null);  
    })
        
})


//  GET ALL RECORDS
describe('GET ALL DATA FROM A BLOG COLLECTION', ()=>{
    
    // beforeEach( async()=>{
    //     const user = { 
    //         _id: mongoose.Types.ObjectId().toHexString(),
    //         firstName : "Simon",
    //         lastName : "Musirikare",
    //         email : "samuelm@gmail.com",
    //         password : "samuel1234"
    //     }
    //     token = generateToken(user);
    // });

    // afterEach(async () => await Blog.remove());
    
    it('It should read a blog', async()=>{
       const res = await request (app)
            .get('/selectBlogs')
            // .set('auth-token', token)
        
        expect(res.status).toBe(200);  
        // done();
    });     
});


    
// UPDATE BLOG TESTING 
describe('MODIFYING DATA IN A BLOG', ()=>{
    let blog;
    beforeEach( async()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "Simon",
            lastName : "Musirikare",
            email : "samuelm@gmail.com",
            password : "samuel1234"
        }
        token = generateToken(user);

        blog = {
            bTitle : "SOFTWARE TESTING MODULE", 
            bContent : "AAAAABBBBBCCCCDDDDEEEEE", 
            bPublisher : user.firstName,
            bPhoto : ""
        }
    });
    afterEach(async () => await Blog.remove());
    
    it('It should update a blog', async()=>{
        const updatedBlog = await Blog(blog);
        const id = updatedBlog._id;
        const res = await request (app)
            .put(`/updateBlog/${id}`)
            .set('auth-token', token)
            .send({
                bTitle : "SOFTWARE TESTING COURSE", 
                bContent : "AAAAABBBBBCCCCDDDDEEEEEYY", 
                bPhoto : ""
            })
        
        expect(res.status).toBe(200);  
        // done();
    });     
});



 // DELETE A BLOG BY ID TESTING 
describe('DELETING  A BLOG', ()=>{
    let blog;
    beforeEach( async()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "Simon",
            lastName : "Musirikare",
            email : "samuelm@gmail.com",
            password : "samuel1234"
        }
        token = generateToken(user);

        blog = {
            bTitle : "SOFTWARE TESTING MODULE", 
            bContent : "AAAAABBBBBCCCCDDDDEEEEE", 
            bPublisher : user.firstName,
            bPhoto : ""
        }
    });
    afterEach(async () => await Blog.remove());
    
    it('It should delete a blog by ID', async()=>{
        const blogToDelete = await Blog(blog);
        const deletedBlog = await blogToDelete.save();
        const id = deletedBlog._id;
        const res = await request (app)
            .delete(`/deleteBlog/${id}`)
            .set('auth-token', token)
        
        expect(res.status).toBe(200);  
        // done();
    });     
});


 // GET ONE BLOG BY ID TESTING 
 describe('GETTING  A BLOG BY ID', ()=>{
    let blog;
    beforeEach( async()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "Simon",
            lastName : "Musirikare",
            email : "samuelm@gmail.com",
            password : "samuel1234"
        }
        token = generateToken(user);

        blog = {
            bTitle : "SOFTWARE TESTING MODULE", 
            bContent : "AAAAABBBBBCCCCDDDDEEEEE", 
            bPublisher : user.firstName,
            bPhoto : ""
        }
    });
    afterEach(async () => await Blog.remove());
    
    it('It should GET a blog', async()=>{
        const blogToGet = await Blog(blog);
        const gotBlog = await blogToGet.save();
        const id = gotBlog._id;
        const res = await request (app)
            .get(`/selectBlog/${id}`)
            .set('auth-token', token)
        
        expect(res.status).toBe(200);  
        // done();
    });     
});
