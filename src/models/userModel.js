import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
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
});

const User = mongoose.model('User', userSchema);

export default User;