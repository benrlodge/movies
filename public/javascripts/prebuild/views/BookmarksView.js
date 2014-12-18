(function() {
  var BookmarksView, MoviePageView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MoviePageView = require('./MoviePageView');

  module.exports = BookmarksView = (function(_super) {
    __extends(BookmarksView, _super);

    function BookmarksView() {
      return BookmarksView.__super__.constructor.apply(this, arguments);
    }

    BookmarksView.prototype.el = $("#primary-view-content");

    BookmarksView.prototype.initialize = function() {
      this.templ = Handlebars.compile($("#movies-list-template").html());
      this.rottenIds = [];
      this.loadBookmarks();
      return this.listenTo(this.collection, "getMovies", this.getMovies);
    };

    BookmarksView.prototype.loadBookmarks = function() {
      return this.collection.fetch({
        cache: true,
        success: function(collection) {
          return collection.trigger('getMovies');
        },
        error: function(a, b, c) {}
      });
    };

    BookmarksView.prototype.getMovies = function() {
      return _.each(this.collection.models, ((function(_this) {
        return function(item) {
          log(item.attributes.rottenId);
          return _this.rottenIds.push(item.attributes.rottenId);
        };
      })(this)), this);
    };

    BookmarksView.prototype.render = function() {
      return log(this.collection);
    };

    BookmarksView.prototype.events = {
      "click .sort-link": "sort"
    };

    return BookmarksView;

  })(MoviePageView);

}).call(this);
