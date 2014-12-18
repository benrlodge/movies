(function() {
  var SingleMovieModel, SingleMovieView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SingleMovieModel = require('../models/SingleMovieModel');

  module.exports = SingleMovieView = (function(_super) {
    __extends(SingleMovieView, _super);

    function SingleMovieView() {
      return SingleMovieView.__super__.constructor.apply(this, arguments);
    }

    SingleMovieView.prototype.tagName = "li";

    SingleMovieView.prototype.className = "movie-preview";

    SingleMovieView.prototype.render = function() {
      var templ;
      templ = Handlebars.compile($("#movie-template").html());
      this.$el.html(templ(this.model.toJSON()));
      return this;
    };

    return SingleMovieView;

  })(Backbone.View);

}).call(this);
