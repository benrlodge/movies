MoviePageView = require './MoviePageView'

module.exports = class  BookmarksView extends MoviePageView
  
  el: $ "#primary-view-content"
  
  initialize: ->
    @templ = Handlebars.compile($("#movies-list-template").html())
    @rottenIds = []
    @loadBookmarks()
    @listenTo(@collection, "getMovies", @getMovies)


  loadBookmarks: ->
    @collection.fetch
      cache: true
      success: (collection) ->
        collection.trigger('getMovies')
      error: (a, b, c) ->


  getMovies: ->
    
    _.each @collection.models, ((item) =>
      log item.attributes.rottenId
      @rottenIds.push(item.attributes.rottenId)
    ), @


  render: ->
    log @collection


  events:
    "click .sort-link" : "sort"

