const Movie = require('../models/movies');

function createMovie(req, res) {
    const body = req.body;
    Movie.create(body).then(Movie => {
        res.status(201).json(Movie);
    });
}

async function getMovie(req, res) {
    const id = req.params.id;
    const Movie = await Movie.findByPk(id);
    res.status(200).json(Movie);
}

async function getMovies(req, res) {
    const Movies = await Movie.findAll();
    res.status(200).json(Movies);    
}

async function updateMovie(req, res) {
    const id = req.params.id;
    const Movie = req.body;
    await Movie.update(Movie, {where: {id}});
    const Movie_updated = await Movie.findByPk(id);
    res.status(200).json(Movie_updated);
}

async function deleteMovie(req, res) {
    const id = req.params.id;
    const deleted = Movie.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createMovie,
    getMovie,
    getMovies,
    updateMovie,
    deleteMovie
}
