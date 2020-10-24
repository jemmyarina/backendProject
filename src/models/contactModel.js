import mongoose from 'mongoose';

const message = mongoose.model('Contact', new mongoose.Schema({
    senderNames: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 10000,
        required: true
    },
    body: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    dateContact: {
        type: Date,
        default: new Date()
    },

}));

export default message;

