(function() {
  var Movies,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Movies = (function(_super) {
    __extends(Movies, _super);

    function Movies() {
      return Movies.__super__.constructor.apply(this, arguments);
    }

    Movies.prototype.comparator = function(property) {};

    Movies.prototype.strategies = {
      title: function(movie) {
        return movie.get("title");
      },
      audience_score: function(a, b) {
        a = a.get('ratings')['audience_score'];
        b = b.get('ratings')['audience_score'];
        if (a === b) {
          return 0;
        }
        if (a < b) {
          return 1;
        } else {
          return -1;
        }
      },
      critics_score: function(a, b) {
        a = a.get('ratings')['critics_score'];
        b = b.get('ratings')['critics_score'];
        if (a === b) {
          return 0;
        }
        if (a < b) {
          return 1;
        } else {
          return -1;
        }
      }
    };

    Movies.prototype.changeSort = function(sortProperty) {
      this.comparator = this.strategies[sortProperty];
      this.sort();
    };

    Movies.prototype.initialize = function() {
      this.changeSort("title");
    };

    return Movies;

  })(Backbone.Collection);

}).call(this);
