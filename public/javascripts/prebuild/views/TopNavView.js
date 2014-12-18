(function() {
  var TopNavView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  TopNavView = (function(_super) {
    __extends(TopNavView, _super);

    function TopNavView() {
      return TopNavView.__super__.constructor.apply(this, arguments);
    }

    TopNavView.prototype.el = $("#top-nav");

    TopNavView.prototype.initialize = function() {
      this.templ = Handlebars.compile($("#top-nav-template").html());
      return this.render();
    };

    TopNavView.prototype.keyPressEventHandler = function(e) {
      if (e.keyCode === 13) {
        this.searchTerm = $(e.currentTarget).val();
        return this.search();
      }
    };

    TopNavView.prototype.render = function() {
      $(this.el).html(this.templ());
      return this;
    };

    TopNavView.prototype.events = {
      "keyup .top-nav__search": "keyPressEventHandler"
    };

    TopNavView.prototype.search = function() {
      return window.location.hash = '#search/' + this.searchTerm;
    };

    return TopNavView;

  })(Backbone.View);

  module.exports = TopNavView;

}).call(this);
