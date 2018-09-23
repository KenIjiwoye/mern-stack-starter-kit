const Movie = require('../models/Movies');

var exports = module.exports = {};

exports.index = async (req,res) => {
    const movies = await Movie.find({})
    res.status(200).json(movies)
}

exports.newMovie = async ( req, res ) => {
    const newMovie = new Movie(req.body);
    movie = await newMovie.save();
    res.status(201).json(movie);
}