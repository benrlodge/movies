Loader = require '../helpers/Loader'
MovieView = require './MovieView'
Bookmark = require '../models/BookmarkModel'


module.exports = class MoviePageView extends Backbone.View  

  events:
    "click [data-action='sort-movies']" : "sort"
    "click [data-action='bookmark-movie']" : "bookmark"


  sort: (ev) -> 
    $sortTarget = $(ev.target)
    sortAttribute = $sortTarget.data 'sort'
    @collection.changeSort sortAttribute
    @render()
    $('.sort-link').removeClass 'active'
    $(".sort-link[data-sort='#{sortAttribute}']").addClass('active');


  bookmark: (ev) ->    
    $movie = $(ev.currentTarget)
    id = $movie.data('id')
    bookmarkStatus = $movie.hasClass('active')
  
    if bookmarkStatus == false
      bookmark = new Bookmark({ rottenId: id})
      @books.create(bookmark)
      $movie.removeClass('fa-star-o').addClass('fa-star active')

    else
      $movie.addClass('fa-star-o').removeClass('fa-star active')
      book = @books.findWhere({rottenId: id})
      book.destroy()


  loadData:->
    new Loader({ msg: "Loading Movies..." }).show()
    @collection.fetch
      cache: true
      success: (collection) ->
        log collection
        collection.trigger('fetchBookmarks')
      error: (a, b, c) ->


  fetchBookmarks: ->
    @books.fetch
      cache: true
      success: (collection) ->
        log collection
        new Loader().hide()
        collection.trigger('placeBookmarks')
      error: (a, b, c) ->


  placeBookmarks: ->
    # Go throuh Bookmarks and add active status 
    # to model in Movie collection
    for book in @books.models
      bookId = book.attributes.rottenId
      for movie in @collection.models
        movieId = Number(movie.id)
        if bookId == movieId
          movie.attributes.bookmarked = true
    @render()


  render: ->
    $(@el).html @templ( movies: @collection.models, page: @pageInfo )
    _.each @collection.models, ((item) =>
      @renderMovie item
      return
    ), @
    return

  renderMovie: (item) ->
    movieView = new MovieView(model: item)
    @$el.append movieView.render().el
    return
