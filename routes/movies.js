const router = require('express-promise-router')();
const MoviesController = require('../controllers/MoviesController');

router.route('/')
    .get(MoviesController.index)
    .post(MoviesController.newMovie)

module.exports = router;
