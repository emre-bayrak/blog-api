const express = require('express');
const router = express.Router();

// Middleware
const verifyToken = require('../middleware/verify-token');

// Models
const Post = require('../models/Post');

//Get all posts
router.get('/', (req, res) => {
  const promise = Post.find({});

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

// Get post by ID
router.get('/:id', (req, res, next) => {
  const promise = Post.findById(req.params.id);

  promise.then((post) => {
    if (!post)
      next({ message: 'The post isn\'t found!'});

    res.json(post);
  }).catch((err) => {
    res.json(err);
  });
});

//Add New Post
router.post('/', verifyToken, (req, res, next) => {
  const post = new Post(req.body);
  const promise = post.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err)=> {
    res.json(err);
  });

});

module.exports = router;
