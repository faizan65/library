const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },    
    date: {
        type: Date,
        required: true
    },
    summary: {
        type: Date,
        required: true
    },
    isbn: {
        type: Date,
        required: true
    },
    author : {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})

module.exports = mongoose.model('Book', bookSchema)