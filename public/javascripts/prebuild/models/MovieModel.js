(function() {
  var Movie,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Movie = (function(_super) {
    __extends(Movie, _super);

    function Movie() {
      return Movie.__super__.constructor.apply(this, arguments);
    }

    return Movie;

  })(Backbone.Model);

}).call(this);
