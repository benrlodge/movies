(function() {
  var BookmarkCollection, InTheatersView, Loader, MoviePageView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Loader = require('../helpers/Loader');

  MoviePageView = require('./MoviePageView');

  BookmarkCollection = require('../collections/BookmarkCollection');

  module.exports = InTheatersView = (function(_super) {
    __extends(InTheatersView, _super);

    function InTheatersView() {
      return InTheatersView.__super__.constructor.apply(this, arguments);
    }

    InTheatersView.prototype.el = $("#primary-view-content");

    InTheatersView.prototype.pageInfo = {
      name: 'New Releases'
    };

    InTheatersView.prototype.initialize = function() {
      this.templ = Handlebars.compile($("#movies-list-template").html());
      this.books = new BookmarkCollection;
      this.loadData();
      this.listenTo(this.collection, "fetchBookmarks", this.fetchBookmarks);
      return this.listenTo(this.books, "placeBookmarks", this.placeBookmarks);
    };

    return InTheatersView;

  })(MoviePageView);

}).call(this);
