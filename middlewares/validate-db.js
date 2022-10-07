const User = require('../models/users');
const Movie = require('../models/movies');

const validateEmail = async( email = '' ) => {

    const emailExists = await User.findOne({ where: {email} });
    if ( emailExists ) {
        throw new Error(`The email ${email} is already registered`);
    }
}

const loginEmail = async( email = '' ) => {

    const emailExists = await User.findOne({ where: {email} });
    if (!emailExists ) {
        throw new Error(`The email does not exist`);
    }
}

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
