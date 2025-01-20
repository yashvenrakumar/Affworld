const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    console.log("file.path", file.path);
    const { caption } = req.body;
    const post = new Post({ photo: file.path, caption, user: req.user.id });
    await post.save();
    res.status(201).json(post);
  
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("user", "name email");
    res.status(200).json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
