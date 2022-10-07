const router = require('express').Router();
const { signUp, logIn } = require('../controllers/users');
const {check} = require('express-validator');
const {validateFields} = require('../middlewares/validate-Fields');
const {
    loginEmail,
    validateEmail
} = require('../middlewares/validate-db');

//REGISTRARTE
router.post('/signUp',[
    //NAME
    check('name', 'Name is required').not().isEmpty(),
    //LASTNAME
    check('lastname', 'Lastname is required').not().isEmpty(),
    //EMAIL
    check('email', 'Email is required').not().isEmpty(),
    //VALID EMAIL
    check('email', 'The email is not valid').isEmail(),
    //EXIST EMAIL
    check('email').custom(validateEmail),
    //PASSWORD REQUIRED
    check('password', 'Password is required').not().isEmpty(),
    //VALID PASSWORD
    check('password', 'the password must contain more than 8 characters','Please enter a password at least 8 character and contain At least one uppercase.At least one lower case.At least one special character.')
        .isLength({ min: 8 })
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,),
    validateFields,
],signUp);

//INICIAR SESION
router.post('/logIn',[
    //VALID EMAIL
    check('email', 'This is not a valid email address').isEmail(),
    //EMAIL REQUIRED
    check('email', 'Email is required').not().isEmpty(),
    //PASSWORD REQUIRED
    check('password', 'Password is required').not().isEmpty(),
    //EXISTEMAIL
    check('email').custom(loginEmail),
    validateFields
], logIn);

module.exports = router;