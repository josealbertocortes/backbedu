const User = require('../models/users');
const Movie = require('../models/movies');

//VERIFICA SI EL CORREO YA EXISTE PARA SIGNIN
const validateEmail = async( email = '' ) => {

    const emailExists = await User.findOne({ where: {email} });
    if ( emailExists ) {
        throw new Error(`The email ${email} is already registered`);
    }
}
//VERIFICA SIN EL CORREO NO EXISTE PARA LOGIN
const loginEmail = async( email = '' ) => {

    const emailExists = await User.findOne({ where: {email} });
    if (!emailExists ) {
        throw new Error(`The email does not exist`);
    }
}
//SE ENCARGA DE VER SI EXISTE LA PELICULA CON EL ID DADO
const existsMovieById = async(id)=>{
    const existsMovie = await Movie.findOne({where:{id}});
    if(!existsMovie){
        throw new Error(`The movie with id ${id} does not exist`)
    }
}

module.exports = {
    validateEmail,
    loginEmail,
    existsMovieById
}
