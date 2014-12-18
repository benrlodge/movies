(function() {
  var Bookmark, Loader, MoviePageView, MovieView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Loader = require('../helpers/Loader');

  MovieView = require('./MovieView');

  Bookmark = require('../models/BookmarkModel');

  module.exports = MoviePageView = (function(_super) {
    __extends(MoviePageView, _super);

    function MoviePageView() {
      return MoviePageView.__super__.constructor.apply(this, arguments);
    }

    MoviePageView.prototype.events = {
      "click [data-action='sort-movies']": "sort",
      "click [data-action='bookmark-movie']": "bookmark"
    };

    MoviePageView.prototype.sort = function(ev) {
      var $sortTarget, sortAttribute;
      $sortTarget = $(ev.target);
      sortAttribute = $sortTarget.data('sort');
      this.collection.changeSort(sortAttribute);
      this.render();
      $('.sort-link').removeClass('active');
      return $(".sort-link[data-sort='" + sortAttribute + "']").addClass('active');
    };

    MoviePageView.prototype.bookmark = function(ev) {
      var $movie, book, bookmark, bookmarkStatus, id;
      $movie = $(ev.currentTarget);
      id = $movie.data('id');
      bookmarkStatus = $movie.hasClass('active');
      if (bookmarkStatus === false) {
        bookmark = new Bookmark({
          rottenId: id
        });
        this.books.create(bookmark);
        return $movie.removeClass('fa-star-o').addClass('fa-star active');
      } else {
        $movie.addClass('fa-star-o').removeClass('fa-star active');
        book = this.books.findWhere({
          rottenId: id
        });
        return book.destroy();
      }
    };

    MoviePageView.prototype.loadData = function() {
      new Loader({
        msg: "Loading Movies..."
      }).show();
      return this.collection.fetch({
        cache: true,
        success: function(collection) {
          log(collection);
          return collection.trigger('fetchBookmarks');
        },
        error: function(a, b, c) {}
      });
    };

    MoviePageView.prototype.fetchBookmarks = function() {
      return this.books.fetch({
        cache: true,
        success: function(collection) {
          log(collection);
          new Loader().hide();
          return collection.trigger('placeBookmarks');
        },
        error: function(a, b, c) {}
      });
    };

    MoviePageView.prototype.placeBookmarks = function() {
      var book, bookId, movie, movieId, _i, _j, _len, _len1, _ref, _ref1;
      _ref = this.books.models;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        book = _ref[_i];
        bookId = book.attributes.rottenId;
        _ref1 = this.collection.models;
        for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
          movie = _ref1[_j];
          movieId = Number(movie.id);
          if (bookId === movieId) {
            movie.attributes.bookmarked = true;
          }
        }
      }
      return this.render();
    };

    MoviePageView.prototype.render = function() {
      $(this.el).html(this.templ({
        movies: this.collection.models,
        page: this.pageInfo
      }));
      _.each(this.collection.models, ((function(_this) {
        return function(item) {
          _this.renderMovie(item);
        };
      })(this)), this);
    };

    MoviePageView.prototype.renderMovie = function(item) {
      var movieView;
      movieView = new MovieView({
        model: item
      });
      this.$el.append(movieView.render().el);
    };

    return MoviePageView;

  })(Backbone.View);

}).call(this);
