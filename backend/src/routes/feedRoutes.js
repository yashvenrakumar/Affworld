const express = require("express");
const { createPost, getPosts } = require("../controllers/feedController");
const authMiddleware = require("../middlewares/authMiddleware");
const uploadMiddleware = require("../config/multer"); // Multer for file upload
const router = express.Router();

router.post(
  "/posts",
  authMiddleware,
  uploadMiddleware.single("photo"),
  createPost
);
router.get("/posts", authMiddleware, getPosts);

module.exports = router;
