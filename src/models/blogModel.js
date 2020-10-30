import mongoose from 'mongoose';

const Blog = mongoose.model('Blog', new mongoose.Schema({
    bTitle: {
        type: String,
        minlength: 2,
        maxlength: 100,
        required: true
    },
    bContent: {
        type: String,
        minlength: 5,
        maxlength: 10000,
        required: true
    },
    bPublisher: {
        firstName: String,
        lastName: String
    },
    bDatePublished: {
        type: Date,
        default: new Date()
    },
    bPhoto: {
        type: String,
        required: false
    }
}));
export default Blog;