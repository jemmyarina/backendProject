import mongoose from 'mongoose';


const User = mongoose.model('Users', new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100
    },  
   lastName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        minlength: 6,
        maxlength: 200,
        required: true
    },
    role: {
        type: String,
        default: "standard user"
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    modifiedAt: {
        type: Date,
        default: new Date()
    }    
}));

export default User;