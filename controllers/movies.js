const Movie = require('../models/movies');

async function createMovie(req, res) {
    const body = req.body;
    const movie = await Movie.findOne({ where: { name: body["name"]} });
    if(movie){
        res.status(400).json({"details":"La pelicula ya se encuentra registrada "})
    }
    Movie.create(body).then(Movie => {
        res.status(201).json(Movie);
    });
}

async function getMovie(req, res) {
    const id = req.params.id;
    const movie = await Movie.findByPk(id);
    res.status(200).json(movie);
}

async function getMovies(req, res) {
    const movies = await Movie.findAll();
    res.status(200).json(movies);    
}

async function updateMovie(req, res) {
    const id = req.params.id;
    const movie = req.body;
    await Movie.update(movie, {where: {id}});
    const movie_updated = await Movie.findByPk(id);
    res.status(200).json(movie_updated);
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
