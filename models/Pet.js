const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
name: {
    type: String,
    required: true,
},
birth: {
    type: String,
},
lifetime: {
    type: String,
    required: true,
},
price: {
    type: Number,
    required: true,
},
breed: {
    type: String,
    required: true,
},
status: {
    type: String,
    enum: ["your pet", "sell", "lost/found", "in good hands"],
    default: "in good hands",
    required: true,
},
sex: {
    type: String,
    enum: ["Female", "Male"],
    default: 'not specified',
},
image: {
    type: String,
},
location: {
    type: String,
    required: true,
},
price: {
    type: Number,
    required: true,
},
comments: {
    type: String,
    required: true
},
user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
}
},
{
    versionKey: false,
    timestamps: true
}
)


const Pet = mongoose.model('pet', petSchema)

module.exports = {
    Pet,
}