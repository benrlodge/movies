Movie = require '../models/MovieModel'

module.exports = class SearchCollection extends Backbone.Collection
  model: Movie
  initialize: (options) ->
  	@query = options.query

  url: -> 
  	return "/api/movies/search?q=#{@query}"

  parse: (resp, xhr) ->
    return resp.movies