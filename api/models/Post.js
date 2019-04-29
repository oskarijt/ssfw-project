const mongoose = require('mongoose');

// User Schema
const formSchema = mongoose.Schema({
    category: String,
    title: String,
    description: String,
    imagePath: String,
    thumbnailPath: String,
    author: String
});

module.exports = mongoose.model('Reviews', formSchema);