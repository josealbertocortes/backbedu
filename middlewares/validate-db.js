const User = require('../models/users');

const validateEmail = async( email = '' ) => {

    const emailExists = await User.findOne({ where: {email} });
    if ( emailExists ) {
        throw new Error(`The email ${email} is already registered`);
    }
}

const loginEmail = async( email = '' ) => {

    const emailExists = await User.findOne({ where: {email} });
    if (!emailExists ) {
        throw new Error(`The mail does not exist`);
    }
}

module.exports = {
    validateEmail,
    loginEmail
}
