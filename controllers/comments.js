const Comment = require('../models/comments');
const Movie = require('../models/movies');
const User = require('../models/users');

async function createComment(req, res) {
    const body = req.body;
        // find the user record
    const user = await User.findOne({ where: { id: body["userId"] } });
    const movie = await Movie.findOne({ where: { id: body["movieId"] } });
    // create the project
    const comment = await Comment.create(body);
    // set the user (project manager) foreign key
    comment.setUser(user);
    res.status(201).json(Comment);

}

async function getComment(req, res) {
    const id = req.params.id;
    const Comment = await Comment.findByPk(id);
    res.status(200).json(Comment);
}

async function getComments(req, res) {
    const Comments = await Comment.findAll();
    res.status(200).json(Comments);    
}

async function updateComment(req, res) {
    const id = req.params.id;
    const Comment = req.body;
    await Comment.update(Comment, {where: {id}});
    const Comment_updated = await Comment.findByPk(id);
    res.status(200).json(Comment_updated);
}

async function deleteComment(req, res) {
    const id = req.params.id;
    const deleted = Comment.destroy(
        {where: {id} }
    );
    res.status(200).json(deleted);
}

module.exports = {
    createComment,
    getComment,
    getComments,
    updateComment,
    deleteComment
}
