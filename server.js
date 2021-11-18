const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connection to DB

mongoose.connect(
    process.env.DB_CONNECT,
    {useUnifiedTopology: true, useNewUrlParser: true},
    () => console.log("Connected To DB")
);

const indexRouter = require('./routes/index');

app.use('/', indexRouter)

app.listen(process.env.PORT || 3000, () => console.log("Server is running"));


