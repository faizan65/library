const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const expressLayouts = require("express-ejs-layouts");
const bodyParser = require('body-parser')

app.set('view engine', "ejs")
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false, limit: "10mb"}))

dotenv.config();

// Connection to DB

mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology: true, useNewUrlParser: true},
    () => console.log("Connected To DB")
);

const indexRouter = require('./routes/index');
const authorRouter = require('./routes/authors');
const bookRouter = require('./routes/books');

app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)

app.listen(process.env.PORT || 3000, () => console.log("Server is running"));


