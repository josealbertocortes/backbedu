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

//VER PELICULAS
router.get('/', getMovies);
//VER PELICULA POR ID
router.get('/:id',[
    check('id').custom(existsMovieById),
    validateFields
], getMovie);
//CREAR PELICULA
router.post('/',[
    check('name','The name is required').not().isEmpty(),
    check('genre','The genre is required').not().isEmpty(),
    check('synopsis','The synopsis is required').not().isEmpty(),
    validateFields
], createMovie);
//ACTUALIZAR PELICULA
router.patch('/:id',[
    check('id').custom(existsMovieById),
    auth.required,
    validateFields
], updateMovie);
//ELIMINAR PELICULA
router.delete('/:id', [
    check('id').custom(existsMovieById),
    auth.required,
    validateFields
], deleteMovie);

module.exports = router;