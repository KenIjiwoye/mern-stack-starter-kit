const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title:  String,
  actors: String,
  description: String,
  poster: String
});

const Movie = mongoose.model('movie', moviesSchema);
module.exports = Movie