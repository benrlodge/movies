Movies = require './MovieCollection'
Movie = require '../models/MovieModel'

module.exports = class InTheatersCollection extends Movies
  model: Movie
  url: "/api/movies/inTheaters"
 
  parse: (resp, xhr) ->
    return resp.movies