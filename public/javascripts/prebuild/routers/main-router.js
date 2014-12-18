(function() {
  var BookmarkCollection, BookmarksView, InTheatersCollection, InTheatersView, MainRouter, NewReleasesCollection, NewReleasesView, SearchCollection, SearchResults, SingleMovieView, TopNavView,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  TopNavView = require('../views/TopNavView');

  NewReleasesCollection = require('../collections/NewReleasesCollection');

  NewReleasesView = require('../views/NewReleasesView');

  InTheatersCollection = require('../collections/InTheatersCollection');

  InTheatersView = require('../views/InTheatersView');

  SearchCollection = require('../collections/SearchCollection');

  SearchResults = require('../views/SearchResults');

  SingleMovieView = require('../views/SingleMovieView');

  BookmarksView = require('../views/BookmarksView');

  BookmarkCollection = require('../collections/BookmarkCollection');

  module.exports = MainRouter = (function(_super) {
    __extends(MainRouter, _super);

    function MainRouter() {
      return MainRouter.__super__.constructor.apply(this, arguments);
    }

    MainRouter.prototype.routes = {
      "": "new_releases",
      "new_releases/": "new_releases",
      "in_theaters/": "in_theaters",
      "search/:term": "search_results",
      "movie/:id": "movie",
      "bookmarks/": "bookmarks"
    };

    MainRouter.prototype.initialize = function() {
      return this.unbindPrimaryView;
    };

    MainRouter.prototype.unbindPrimaryView = function() {
      $("#primary-view-content").empty();
      return $("#primary-view-content").unbind();
    };

    MainRouter.prototype.routeLoaded = function() {
      var route;
      route = Backbone.history.fragment;
      $('.top-nav__link').removeClass('active');
      return $(".top-nav__link[href='#/" + route + "']").addClass('active');
    };

    MainRouter.prototype.new_releases = function() {
      var coll, view;
      this.unbindPrimaryView();
      coll = new NewReleasesCollection;
      view = new NewReleasesView({
        collection: coll
      });
      new TopNavView();
      return this.routeLoaded();
    };

    MainRouter.prototype.in_theaters = function() {
      var coll, view;
      this.unbindPrimaryView();
      coll = new InTheatersCollection;
      view = new InTheatersView({
        collection: coll
      });
      new TopNavView();
      return this.routeLoaded();
    };

    MainRouter.prototype.search_results = function(term) {
      var coll, view;
      this.unbindPrimaryView();
      coll = new SearchCollection({
        query: term
      });
      view = new SearchResults({
        collection: coll,
        searchTerm: term
      });
      new TopNavView();
      return this.routeLoaded();
    };

    MainRouter.prototype.movie = function(id) {
      new SingleMovieView({
        id: id
      });
      new TopNavView();
      return this.routeLoaded();
    };

    MainRouter.prototype.bookmarks = function() {
      var coll, view;
      this.unbindPrimaryView();
      coll = new BookmarkCollection;
      view = new BookmarksView({
        collection: coll
      });
      new TopNavView();
      return this.routeLoaded();
    };

    return MainRouter;

  })(Backbone.Router);

}).call(this);
