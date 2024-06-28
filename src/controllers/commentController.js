const Comment = require('../models/comment');

// Create a new comment
exports.createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(201).send(newComment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all comments
exports.getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.status(200).send(comments);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get a single comment by ID
exports.getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) {
      return res.status(404).send();
    }
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Update a comment
exports.updateComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!comment) {
      return res.status(404).send();
    }
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a comment
exports.deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findByIdAndDelete(req.params.id);
    if (!comment) {
      return res.status(404).send();
    }
    res.status(204).send();
  } catch (error) {
    res.status(400).send(error);
  }
};
