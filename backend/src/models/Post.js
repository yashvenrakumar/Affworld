const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    photo: String,
    caption: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Post', postSchema);
