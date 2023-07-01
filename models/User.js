const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        default: '',
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
    bitrhday: {
      type: String,
      default: '',
    },
    avatar: {
      type: String,
      default: '',
    },
    phone: {
        type: String,
        default: '',
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