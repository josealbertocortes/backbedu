const Comment = require("../models/comments");
const Movie = require("../models/movies");
const User = require("../models/users");

async function createComment(req, res) {
  const body = req.body;
  // find the user record
  const user = await User.findOne({ where: { id: body["userId"] } });
  if (!user) {
    res.status(404).json({ details: "el usuario no ha sido encontrado" });
  }
  const movie = await Movie.findOne({ where: { id: body["movieId"] } });
  if (!movie) {
    res.status(404).json({ details: "La pelicula  no ha sido encontrado" });
  }

  // create the project
  const comment = await Comment.create(body);
  // set the user (project manager) foreign key
  comment.setUser(user);
  comment.setMovie(movie);
  res.status(201).json(comment);
}

async function getComment(req, res) {
  const id = req.params.id;
  const comment = await Comment.findByPk(id);
  if (!comment) {
    res
      .status(404)
      .json({ details: `comentario no encontrado con el sigueinte id: ${id}` });
  }
  res.status(200).json(Comment);
}

async function getComments(req, res) {
  const Comments = await Comment.findAll();
  res.status(200).json(Comments);
}

async function updateComment(req, res) {
  const id = req.params.id;
  const commentUpdate = req.body;
  const comment = await Comment.findByPk(id);
  if (!comment) {
    res
      .status(404)
      .json({ details: `comentario no encontrado con el sigueinte id: ${id}` });
  }
  await Comment.update(commentUpdate, { where: { id } });
  if (commentUpdate["userId"]) {
    const user = await User.findOne({ where: { id: commentUpdate["userId"] } });
    if (user) {
      comment.setUser(user);
    }
  }
  if (commentUpdate["movieId"]) {
    const movie = await Movie.findOne({
      where: { id: commentUpdate["movieId"] },
    });
    if (movie) {
      comment.setMovie(movie);
    }
  }

  const Comment_updated = await Comment.findByPk(id);
  res.status(200).json(Comment_updated);
}

async function deleteComment(req, res) {
  const id = req.params.id;
  const comment = await Comment.findByPk(id);
  if (!comment) {
    res
      .status(404)
      .json({ details: `comentario no encontrado con el sigueinte id: ${id}` });
  }
  const deleted = Comment.destroy({ where: { id } });
  res.status(200).json(deleted);
}

module.exports = {
  createComment,
  getComment,
  getComments,
  updateComment,
  deleteComment,
};
