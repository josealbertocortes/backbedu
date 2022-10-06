const router = require('express').Router();
const {
    getMovie,
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/movies')
const auth = require('../config/auth');

router.get('/', getMovies);
router.get('/:id', getMovie);
router.post('/', auth.required, createMovie);
router.patch('/:id', auth.required, updateMovie);
router.delete('/:id', auth.required, deleteMovie);

module.exports = router;