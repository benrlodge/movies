(function() {
  var MovieView, TopRentalsView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  MovieView = require('../views/MovieView');

  module.exports = TopRentalsView = (function(_super) {
    __extends(TopRentalsView, _super);

    function TopRentalsView() {
      return TopRentalsView.__super__.constructor.apply(this, arguments);
    }

    TopRentalsView.prototype.el = $("#primary-view-content");

    TopRentalsView.prototype.initialize = function() {
      this.templ = Handlebars.compile($("#movies-list-template").html());
      this.loadData();
      return this.collection.on('sort', this.render, this);
    };

    TopRentalsView.prototype.events = {
      "click .sort-link": "sort"
    };

    TopRentalsView.prototype.render = function() {
      var pageInfo, that;
      that = this;
      pageInfo = {
        name: 'Top DVDs'
      };
      $(this.el).html(this.templ({
        movies: that.collection.models,
        page: pageInfo
      }));
      return this;
    };

    return TopRentalsView;

  })(MovieView);

}).call(this);
