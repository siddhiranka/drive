const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true,
        minlength: [3, 'username must be atleast of 3 characters']
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
        lowercase: true,
        minlength: [13, 'email must be atleast of 13 characters']
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: [5, 'password must be atleast of 5 characters']
    }
})
const userModel = mongoose.model('User', userschema);
module.exports = userModel;
