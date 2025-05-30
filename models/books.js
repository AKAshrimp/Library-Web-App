const mongoose = require('mongoose');


const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  year: { type: Number },
  genre: { type: String },
  ISBN: { type: String, unique: true }
});

module.exports = BookSchema;
