const express = require("express");
const {
  getPosts,
  setPosts,
  deletePost,
} = require("../controllers/post.controller");

const router = express.Router();

router.get("/", getPosts);
router.post("/", setPosts);
router.delete("/:id", deletePost);

module.exports = router;
