const express = require('express');
const router = express.Router();
const Genre = require("../models/genre")

// All Genre Routes
router.get('/', async (req, res) => {
    try{
        const genres = await Genre.find({})
        res.render('genres/index', {genres: genres})
    }catch{
        res.redirect('/')
    }
})

// New Genre Routes - Displaying the form
router.get('/new', (req, res) => {
    res.render('genres/new', {genre: new Genre()})
})

// Creating New Genre
router.post('/', async (req, res) =>{
    const genre = new Genre({
        name: req.body.name
    })
    try{
        const newGenre = await genre.save()
        res.redirect('genres')
    } catch{
        res.render('genres/new', {
         genre: genre,
        errorMessage: 'Error Creating Genre'
         } )
    }
      
})
module.exports = router;