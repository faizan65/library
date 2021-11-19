const express = require('express');
const router = express.Router();
const Books = require("../models/book")
const Author = require("../models/author")

// All Books Routes
router.get('/', async (req, res) => {
   res.render('books/index')
})

// New Book Routes - Displaying the form
router.get('/new', async (req, res) => {
//   try{
//       const authors = await Author.find({})
//       const book = new Book()
//       res.render('books/new', {
//           authors: authors,
//           book: book
//       })
//   }catch{
//       res.redirect('/books')
//   }
res.render("books/new")
})

// Creating New Book
router.post('/', async (req, res) =>{
   res.send("create Books")
})
module.exports = router;