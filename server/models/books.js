/* 
    File Name: books.js
    Author's Name: Sorada Prathan
    Student ID: 301270677
    Web App Name:Favourite Books
*/

//require modules for the books Model
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
