const express = require('express');
const router = express.Router();
const Book = require("../models/book")


// All Books Routes
router.get('/', async (req, res) => {
   try{
      const books = await Book.find({})
      res.render('books/index', {books: books})
  }catch{
      res,redirect('/')
  }
})

// New Book Routes - Displaying the form
router.get('/new', async (req, res) => {
   res.render('books/new', { book: new Book()})
})
   
// Creating New Book
router.post('/', async (req, res) =>{
   const book = new Book({
      title: req.body.title,
      summary: req.body.summary,
      genre: req.body.genre,
      author: req.body.author
  })
  try{
      const newBook = await book.save()
      res.redirect('books')
  } catch{
      res.render('books/new', {
       book: book,
      errorMessage: 'Error Creating Book'
       } )
  }
  
})
module.exports = router;