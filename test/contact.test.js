import Message from '../src/models/contactModel';
import request from 'supertest';
import config from '../src/config/config';
import app from '../src/index';
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


// POST A MESSAGE
describe('POSTING A CONTACT MESSAGE', ()=>{

    let message;
    
    beforeEach(()=>{
        
        message = {
            senderNames : " SAMUEL", 
            email : "samuelm@gmail.com", 
            body : "HELLO"
        }
    });

    afterEach(async () => await Message.deleteMany());
    
    it('It should send and save a new message', async()=>{
        await request (app)
            .post('/insertContact')
            .send(message);
        
        expect(message).not.toBe(null);  
    })
        
})



//  GET ALL MESSAGES RECORDS
describe('GET ALL DATA FROM CONTACTS COLLECTION', ()=>{
    
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

    afterEach(async () => await Message.remove());
    
    it('It should read all messages received', async(done)=>{
       const res = await request (app)
            .get('/selectContacts')
            .set('auth-token', token)
        
        expect(res.status).toBe(200);  
        done();
    }); 
    
});



 // DELETE MESSAGE BY ID TESTING 
describe('DELETING  A MESSAGE BY ID', ()=>{
    let message;
    beforeEach( async()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "Simon",
            lastName : "Musirikare",
            email : "samuelm@gmail.com",
            password : "samuel1234"
        }
        token = generateToken(user);

        message = {
            senderNames : " SAMUEL", 
            email : "samuelm@gmail.com", 
            body : "HELLO HERE "
        }
    });
    afterEach(async () => await Message.remove());
    
    it('It should delete a message by ID', async(done)=>{
        const messageToDelete = await Message(message);
        const deletedMessage = await messageToDelete.save();
        const id = deletedMessage._id;
        const res = await request (app)
            .delete(`/deleteContact/${id}`)
            .set('auth-token', token)
        
        expect(res.status).toBe(200);  
        done();
    });     
});


 // GET ONE MESSAGE BY ID TESTING 
 describe('GETTING  A MESSAGE BY ID', ()=>{
    let message;
    beforeEach( async()=>{
        const user = { 
            _id: mongoose.Types.ObjectId().toHexString(),
            firstName : "Simon",
            lastName : "Musirikare",
            email : "samuelm@gmail.com",
            password : "samuel1234"
        }
        token = generateToken(user);

        message = {
            senderNames : " SAMUEL", 
            email : "samuelm@gmail.com", 
            body : "HELLO"
        }
    });
    afterEach(async () => await Message.remove());
    
    it('It should GET MESSAGE', async(done)=>{
        const messageToGet = await Message(message);
        const gotMessage = await messageToGet.save();
        const id = gotMessage._id;
        const res = await request (app)
            .get(`/selectContact/${id}`)
            .set('auth-token', token)
        
        expect(res.status).toBe(200);  
        done();
    });     
});
