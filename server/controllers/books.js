let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
//create a reference to the db Schema which is the model
let Book = require('../models/books');

module.exports.displayDetailsPage = (req, res, next) => {
    res.render('books/details',{title:'Add Book'})
}