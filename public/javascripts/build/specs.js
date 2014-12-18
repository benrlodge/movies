(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}],2:[function(require,module,exports){
(function() {
  var MovieModel;

  MovieModel = require('../models/MovieModel');

  describe("Movie Model!", function() {
    var movieModel, name;
    movieModel = new MovieModel({
      name: "The banana man"
    });
    name = movieModel.get("name");
    it("should be defined", function() {
      return expect(movieModel).toBeDefined();
    });
    return it("should get properties", function() {
      return expect(name).toEqual("The banana man");
    });
  });

}).call(this);

},{"../models/MovieModel":1}],3:[function(require,module,exports){
(function() {


}).call(this);

},{}]},{},[2,3]);
