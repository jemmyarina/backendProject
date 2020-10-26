import request from 'supertest';
import config from '../src/config/config';
import Blog from '../src/models/userModel';
import app from '../src/index';
import generateToken from '../src/helpers/token';
import mongoose from 'mongoose';
import { response } from 'express';

const dbURL = config.DATABASE_URL_test;

beforeAll(()=>{
    mongoose.connect(dbURL,{            
        useNewUrlParser: true,                
        useUnifiedTopology: true
    });
});

let token;


// POST
describe('POSTING DATA IN A BLOG', ()=>{

    let blog;
    
    beforeEach(()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "Samuel",
            lastName : "Musirikare",
            email : "samuelm@gmail.com",
            password : "samuel123"
        }
        blog = {
            bTitle : "SOFTWARE TESTING MODULE", 
            bContent : "AAAAABBBBBCCCCDDDDEEEEE", 
            bPublisher : user.firstName,
            bPhoto : ""
        }
        token = generateToken(user);
    })

    afterEach(async () => await Blog.deleteMany());
    
    it('It should insert a new blog', async()=>{
        await request (app)
            .post('/insertBlog')
            .set('auth-token', token)
            .send(blog);
        
        expect(blog).not.toBe(null);  
    })
        
})




// PUT
describe('MODIFYING DATA IN A BLOG', ()=>{
    
    beforeEach( async()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "Simon",
            lastName : "Musirikare",
            email : "samuelm@gmail.com",
            password : "samuel1234"
        }
        token = generateToken(user);
    });

    afterEach(async () => await Blog.remove());
    
    it('It should read a blog', async(done)=>{
       const res = await request (app)
            .get('/selectBlogs')
            .set('auth-token', token)
        
        expect(res.status).toBe(200);  
        done();
    });     
});


    


 