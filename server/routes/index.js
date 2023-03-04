/* --------------------------------------------
  Midterm Exam Cloud Database
  File: index.js
  Description: Index main webpage routes

  Author: Erick Torres Penaloza
  StudentID: 301250235
  Date: 03/03/2023 
  -------------------------------------------*/
// modules required for routing
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// define the game model
let book = require('../models/books');

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home',
    books: ''
   });
});

module.exports = router;
