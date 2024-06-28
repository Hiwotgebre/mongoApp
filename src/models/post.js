const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, index: true }, //Indexed for faster search
  content: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
