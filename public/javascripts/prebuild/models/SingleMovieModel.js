(function() {
  var SingleMovie,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = SingleMovie = (function(_super) {
    __extends(SingleMovie, _super);

    function SingleMovie() {
      return SingleMovie.__super__.constructor.apply(this, arguments);
    }

    SingleMovie.prototype.url = function() {
      return "/api/movies/movieGet/" + this.id;
    };

    return SingleMovie;

  })(Backbone.Model);

}).call(this);
