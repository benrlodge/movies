(function() {
  var Movie, Movies, NewReleasesCollection,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Movies = require('./MovieCollection');

  Movie = require('../models/MovieModel');

  module.exports = NewReleasesCollection = (function(_super) {
    __extends(NewReleasesCollection, _super);

    function NewReleasesCollection() {
      return NewReleasesCollection.__super__.constructor.apply(this, arguments);
    }

    NewReleasesCollection.prototype.model = Movie;

    NewReleasesCollection.prototype.url = "/api/movies/newReleases";

    NewReleasesCollection.prototype.parse = function(resp, xhr) {
      return resp.movies;
    };

    return NewReleasesCollection;

  })(Movies);

}).call(this);
