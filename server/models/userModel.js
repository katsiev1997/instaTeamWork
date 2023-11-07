const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    fullname: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,

    },
    role: {
        type: String,
        default: 'user'
    },
    story: {
        type: String, 
        default: '',
        maxlength: 200
    },
    followers: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    following: [{type: mongoose.Types.ObjectId, ref: 'user'}],
    saved: [{type: mongoose.Types.ObjectId, ref: 'user'}],
}, {
    timestamps: true
})

module.exports = mongoose.model('user', userSchema)