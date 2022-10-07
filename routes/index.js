const router = require('express').Router();
const movies = require('./movies');
const users = require('./users');
const comments = require('./comments');
router.get('/', (req, res) => {
    res.json({'info': 'Welcome to movies API!'})
});
router.use('/commnets', comments);
router.use('/movies', movies);
router.use('/users', users);



module.exports = router;