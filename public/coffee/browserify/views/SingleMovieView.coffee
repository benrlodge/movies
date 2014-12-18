
MoviePageView = require '../views/MoviePageView'
SingleMovieModel = require '../models/SingleMovieModel'

module.exports = class SingleMovieView extends MoviePageView
  
  el: $ "#primary-view-content"
  
  initialize: (options) ->
    log 'Search Result View'
    log 'id: ' + options.id
    
    @movie_template = Handlebars.compile($("#single-movie-template").html())
    searchModel = new SingleMovieModel({id: options.id})
    promise = searchModel.fetch()
    promise.done (res) =>
      @movie = res
      @render()

  render: ->
    movie = {}
    movie.attributes = @movie
    $(@el).html @movie_template( movie: movie )