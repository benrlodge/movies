(function() {
  var InTheatersCollection, Movie, Movies,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Movies = require('./MovieCollection');

  Movie = require('../models/MovieModel');

  module.exports = InTheatersCollection = (function(_super) {
    __extends(InTheatersCollection, _super);

    function InTheatersCollection() {
      return InTheatersCollection.__super__.constructor.apply(this, arguments);
    }

    InTheatersCollection.prototype.model = Movie;

    InTheatersCollection.prototype.url = "/api/movies/inTheaters";

    InTheatersCollection.prototype.parse = function(resp, xhr) {
      return resp.movies;
    };

    return InTheatersCollection;

  })(Movies);

}).call(this);
