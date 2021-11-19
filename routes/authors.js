const express = require('express');
const router = express.Router();
const Author = require("../models/author")

// All Author Routes
router.get('/', async (req, res) => {
    try{
        const authors = await Author.find({})
        res.render('authors/index', {authors: authors})
    }catch{
        res.redirect('/')
    }
    
})


// New Author Routes - Displaying the form
router.get('/new', (req, res) => {
    res.render('authors/new', { author: new Author()})
})

// Creating New Author
router.post('/', async (req, res) =>{
    const author = new Author({
        name: req.body.name
    })
    try{
        const newAuthor = await author.save()
        res.redirect('authors')
    } catch{
        res.render('authors/new', {
         author: author,
        errorMessage: 'Error Creating Author'
         } )
    }
    
})


// Get Router For ID

router.get('/:id', async (req, res) => {
    res.send("Show Author  " + req.params.id)
    
})

// Get Router For Edit Author using ID

router.get('/:id/edit', async (req, res) => {
    try{
        const author = await Author.findById(req.params.id)
        res.render('authors/edit', { author: author})
    }catch{
        res.redirect('/authors')
    }

    
})

// Update Router For Edit Author using ID
router.put('/:id', (req, res) => {
    res.send("update Author" + req.params.id)
})

// Delete Router For Edit Author using ID
router.delete('/:id', (req, res) => {
    res.send("Delete Author" + req.params.id)
})


module.exports = router;