(function() {
  var Movie, Movies, TopRentalsCollection,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Movies = require('./MovieCollection');

  Movie = require('../models/MovieModel');

  module.exports = TopRentalsCollection = (function(_super) {
    __extends(TopRentalsCollection, _super);

    function TopRentalsCollection() {
      return TopRentalsCollection.__super__.constructor.apply(this, arguments);
    }

    TopRentalsCollection.prototype.model = Movie;

    TopRentalsCollection.prototype.url = "/api/movies/topRentals";

    TopRentalsCollection.prototype.parse = function(resp, xhr) {
      return resp.movies;
    };

    return TopRentalsCollection;

  })(Movies);

}).call(this);
