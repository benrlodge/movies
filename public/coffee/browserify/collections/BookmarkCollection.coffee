Backbone.LocalStorage = require("backbone.localstorage")
Movies = require './MovieCollection'
Bookmark = require '../models/BookmarkModel'

module.exports = class BookmarksCollection extends Movies
  model: Bookmark
  url: "/api/movies/bookmarks"
  