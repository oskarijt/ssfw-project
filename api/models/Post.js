const mongoose = require('mongoose');

// User Schema
const formSchema = mongoose.Schema({
    author: String,
    category: String,
    title: String,
    description: String,
    rating: String,
    imagePath: String,
    thumbnailPath: String,
});

module.exports = mongoose.model('week1', formSchema);