import request from 'supertest';
import config from '../src/config/config';
import User from '../src/models/userModel';
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


// POST
describe('USER SIGNUP AND LOGIN', ()=>{
    let sign;
    beforeEach(()=>{
        sign = {
            firstName : "Peter", 
            lastName : "Mugabo", 
            email : "mugabo@gmail.com",
            password : "1234567"
        }
    });

    afterEach(async () => await User.deleteMany());
    
    it('It should allow a new user signing up', async()=>{
        await request (app)
            .post('/insertUser')
            .send(sign);
        
        expect(sign).not.toBe(null);  
    })
});

describe('USER SIGNUP AND LOGIN', ()=>{
    it("it should login", async () => {
        const user = {
            firstName : "Peter", 
            lastName : "Mugabo", 
            email : "mugabo@gmail.com",
            password : "1234567"
            }
        const res = await request(app)
            .post('/users/login')
            .send(user);
        expect(user).not.toBe(null)
    });
        
});

// //DELETING A USER
 describe('DELETING  A USER', ()=>{

     let user;
     
    beforeEach( async()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            admin: true,
            firstName : "jemima",
            lastName : "safari",
            email : "jemima123@gmail.com",
            password : "jemaim123"
        }
        token = generateToken(user);
  
    });
    afterEach(async () => await User.remove());
    
    it('It should delete a user by ID', async(done)=>{
        const userToDelete = await User({
            firstName : "dan", 
            lastName : "iriho", 
            email : 'dan123@gmail.com',
            password : "dan123"
        });
        const deletedUser = await userToDelete.save();
        const id = deletedUser._id;
        const res = await request (app)
            .delete(`/deleteUser/${id}`)
            .set('auth-token', token)
        
        expect(res.status).toBe(200);  
        done();
    });     
});

// GET
describe('GETTING DATA OF ALL USERS', ()=>{
    
    beforeEach( async()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : 'Simon',
            lastName : 'Musirikare',
            email : 'samuelm@gmail.com',
            password : 'samuel1234',
            admin: true
        }
        token = generateToken(user);
    });

    // afterEach(async () => await User.remove());
    
    it('It should get all users', async()=>{
       const res = await request (app)
            .get('/selectUsers')
            .set('auth-token', token)
        
        expect(res.status).toBe(200);  
        // done();
    });     
});


        
// UPDATE USER TESTING 
describe('MODIFYING DATA OF A USER', ()=>{
    let user;
    beforeEach( async()=>{
        const userr = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "jemima",
            lastName : "safari",
            email : "jemima123m@gmail.com",
            password : "jemima123"
        }
        token = generateToken(userr);

        user = {
            firstName : "dan",
            lastName : "iriho",
            email : "dan123m@gmail.com",
            password : "dan123"
        }
    });
    // afterEach(async () => await User.remove());
    
    it('It should update a user', async()=>{
        const updatedUser = await User(user);
        const id = updatedUser._id;
        const res = await request (app)
            .put(`/updateUser/${id}`)
            .set('auth-token', token)
            .send({
                firstName : "dan",
                lastName : "iriho",
                email : "danm@gmail.com",
                password : "dan123"
            })
        
        expect(res.status).toBe(200);  
        // done();
    });     
});



 