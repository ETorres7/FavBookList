/* --------------------------------------------
  Midterm Exam Cloud Database
  File: books.js
  Description: database formatting model

  Author: Erick Torres Penaloza
  StudentID: 301250235
  Date: 03/03/2023 
  -------------------------------------------*/
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    Title: String,
    Description: String,
    Price: Number,
    Author: String,
    Genre: String
},
    {
        collection: "books"
    });

module.exports = mongoose.model('Book', Book);
