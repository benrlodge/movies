(function() {
  var Loader, MovieView, SearchResults,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Loader = require('../helpers/Loader');

  MovieView = require('./MovieView');

  module.exports = SearchResults = (function(_super) {
    __extends(SearchResults, _super);

    function SearchResults() {
      return SearchResults.__super__.constructor.apply(this, arguments);
    }

    SearchResults.prototype.el = $("#primary-view-content");

    SearchResults.prototype.initialize = function(options) {
      var pageInfo;
      this.searchTerm = options.searchTerm;
      this.getResults();
      pageInfo = {
        name: "Search Results For: " + this.searchTerm
      };
      return this.templ = Handlebars.compile($("#movies-list-template").html());
    };

    SearchResults.prototype.getResults = function() {
      new Loader({
        msg: "Searching Movie Database..."
      }).show();
      return this.collection.fetch({
        success: (function(_this) {
          return function(collection) {
            new Loader().hide();
            _this.isLoading = false;
            return _this.render();
          };
        })(this)
      });
    };

    SearchResults.prototype.render = function() {
      $(this.el).html(this.templ({
        searchTerm: this.searchTerm,
        movies: this.collection.models,
        page: this.pageInfo
      }));
      _.each(this.collection.models, ((function(_this) {
        return function(item) {
          _this.renderMovie(item);
        };
      })(this)), this);
    };

    SearchResults.prototype.renderMovie = function(item) {
      var movieView;
      movieView = new MovieView({
        model: item
      });
      this.$el.append(movieView.render().el);
    };

    return SearchResults;

  })(Backbone.View);

}).call(this);
