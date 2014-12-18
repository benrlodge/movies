(function() {
  var Bookmark, BookmarksCollection, Movies,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Backbone.LocalStorage = require("backbone.localstorage");

  Movies = require('./MovieCollection');

  Bookmark = require('../models/BookmarkModel');

  module.exports = BookmarksCollection = (function(_super) {
    __extends(BookmarksCollection, _super);

    function BookmarksCollection() {
      return BookmarksCollection.__super__.constructor.apply(this, arguments);
    }

    BookmarksCollection.prototype.model = Bookmark;

    BookmarksCollection.prototype.url = "/api/movies/bookmarks";

    return BookmarksCollection;

  })(Movies);

}).call(this);
