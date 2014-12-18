// models/bookmark.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BookmarkSchema = new Schema({
    rottenId: Number
});

module.exports = mongoose.model( 'Bookmark', BookmarkSchema );




// var PictureSchema = new Schema({
//     imageOriginal: String,
//     imageMed: String,
//     imageSmall: String,
//     authorName: String,
//     pictureName: String,
//     tags: String,
//     permission: Boolean,
//     consent: Boolean,
//     status: String,
//     featuredCategory: Boolean,
//     featuredSubcategory: Boolean
// });

// module.exports = mongoose.model( 'Picture', PictureSchema );