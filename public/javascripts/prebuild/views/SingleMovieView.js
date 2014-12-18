(function() {
  var MoviePageView, SingleMovieModel, SingleMovieView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MoviePageView = require('../views/MoviePageView');

  SingleMovieModel = require('../models/SingleMovieModel');

  module.exports = SingleMovieView = (function(_super) {
    __extends(SingleMovieView, _super);

    function SingleMovieView() {
      return SingleMovieView.__super__.constructor.apply(this, arguments);
    }

    SingleMovieView.prototype.el = $("#primary-view-content");

    SingleMovieView.prototype.initialize = function(options) {
      var promise, searchModel;
      log('Search Result View');
      log('id: ' + options.id);
      this.movie_template = Handlebars.compile($("#single-movie-template").html());
      searchModel = new SingleMovieModel({
        id: options.id
      });
      promise = searchModel.fetch();
      return promise.done((function(_this) {
        return function(res) {
          _this.movie = res;
          return _this.render();
        };
      })(this));
    };

    SingleMovieView.prototype.render = function() {
      var movie;
      movie = {};
      movie.attributes = this.movie;
      return $(this.el).html(this.movie_template({
        movie: movie
      }));
    };

    return SingleMovieView;

  })(MoviePageView);

}).call(this);
