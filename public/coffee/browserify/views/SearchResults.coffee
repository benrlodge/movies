Loader = require '../helpers/Loader'
MovieView = require './MovieView'


module.exports = class SearchResults extends Backbone.View

  el: $ "#primary-view-content"
  
  initialize: (options) ->
    @searchTerm = options.searchTerm
    @getResults()
    pageInfo = { name: "Search Results For: #{@searchTerm}" }
    @templ = Handlebars.compile($("#movies-list-template").html())


  getResults: ->
    new Loader({ msg: "Searching Movie Database..." }).show()

    @collection.fetch
      success: (collection) =>
        new Loader().hide()
        @isLoading = false
        @render()


  render: ->
    $(@el).html @templ( searchTerm: @searchTerm, movies: @collection.models, page: @pageInfo )
    _.each @collection.models, ((item) =>
      @renderMovie item
      return
    ), @
    return

  renderMovie: (item) ->
    movieView = new MovieView(model: item)
    @$el.append movieView.render().el
    return
