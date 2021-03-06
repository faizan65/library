const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
   
    summary: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    author : {
        type: String,
        required: true,
        // ref: 'Author'
    }
})

module.exports = mongoose.model('Book', bookSchema)