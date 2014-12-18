(function() {
  var Movie, SearchCollection,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Movie = require('../models/MovieModel');

  module.exports = SearchCollection = (function(_super) {
    __extends(SearchCollection, _super);

    function SearchCollection() {
      return SearchCollection.__super__.constructor.apply(this, arguments);
    }

    SearchCollection.prototype.model = Movie;

    SearchCollection.prototype.initialize = function(options) {
      return this.query = options.query;
    };

    SearchCollection.prototype.url = function() {
      return "/api/movies/search?q=" + this.query;
    };

    SearchCollection.prototype.parse = function(resp, xhr) {
      return resp.movies;
    };

    return SearchCollection;

  })(Backbone.Collection);

}).call(this);
