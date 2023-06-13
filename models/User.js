const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
      },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
      },
    phone: {
        type: String,
        required: true
    },
    token: {
        type: String,
        default: null,
      }
      
},
{
    versionKey: false,
    timestamps: true
},)

const User = mongoose.model('user', userSchema)

module.exports = {
    User,
}