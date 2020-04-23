const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  post: { 
    type: String, 
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('post', PostSchema);