const router = require('express').Router();
const {
    createComment,
    getComment,
    getComments,
    updateComment,
    deleteComment
} = require('../controllers/comments')
const auth = require('../config/auth');

router.get('/', getComment);
router.get('/:id', getComments);
router.post('/', createComment);
router.patch('/:id', auth.required, updateComment);
router.delete('/:id', auth.required, deleteComment);

module.exports = router;