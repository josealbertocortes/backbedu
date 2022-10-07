const router = require("express").Router();
const { check } = require("express-validator");
const {
  createComment,
  getComment,
  getComments,
  updateComment,
  deleteComment,
} = require("../controllers/comments");
const auth = require("../config/auth");

router.get("/", getComments);
router.get("/:id", getComment);
router.post(
  "/",
  check("comment", "The name is required").not().isEmpty(),
  check("rating", "The rating is required").not().isEmpty(),
  check("userId", "The userId is required").not().isEmpty(),
  check("movieId", "The movieId is required").not().isEmpty(),
  createComment
);
router.patch("/:id", auth.required, updateComment);
router.delete("/:id", auth.required, deleteComment);

module.exports = router;
