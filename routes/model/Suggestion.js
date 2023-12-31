const mongoose = require('mongoose')

const suggestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    author: {
        type: String,
        lowercase: true
    },
    suggestion: {
        type: String,
        required: true,
        lowercase: true
    },
    likes: {
        type: Number,
        default: 0
    },
    anonymous: {
        type: Boolean
    },
    timeCreated: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('suggestion', suggestionSchema)