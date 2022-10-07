const router = require('express').Router();
const {check} = require('express-validator');
const {validateFields} = require('../middlewares/validate-Fields');

const {
    getMovie,
    getMovies,
    createMovie,
    updateMovie,
    deleteMovie
} = require('../controllers/movies')

const {
    existsMovieById
} = require('../middlewares/validate-db')

const auth = require('../config/auth');

router.get('/', getMovies);

router.get('/:id',[
    check('id').custom(existsMovieById),
    validateFields
], getMovie);

router.post('/',[
    check('name','The name is required').not().isEmpty(),
    check('genre','The genre is required').not().isEmpty(),
    check('synopsis','The synopsis is required').not().isEmpty(),
    validateFields
], createMovie);

router.patch('/:id',[
    check('id').custom(existsMovieById),
    auth.required,
    validateFields
], updateMovie);

router.delete('/:id', [
    check('id').custom(existsMovieById),
    auth.required,
    validateFields
], deleteMovie);

module.exports = router;