Movies = require './MovieCollection'
Movie = require '../models/MovieModel'

module.exports = class NewReleasesCollection extends Movies
  model: Movie
  url: "/api/movies/newReleases"
  
  parse: (resp, xhr) ->
    return resp.movies