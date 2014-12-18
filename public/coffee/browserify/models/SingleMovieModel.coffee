module.exports = class SingleMovie extends Backbone.Model

	url: -> 
		return "/api/movies/movieGet/#{@id}"