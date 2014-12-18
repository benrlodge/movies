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
