TopNavView = require '../views/TopNavView'

NewReleasesCollection = require '../collections/NewReleasesCollection'
NewReleasesView = require '../views/NewReleasesView'

InTheatersCollection = require '../collections/InTheatersCollection'
InTheatersView = require '../views/InTheatersView'

SearchCollection = require '../collections/SearchCollection'
SearchResults = require '../views/SearchResults'
SingleMovieView = require '../views/SingleMovieView'

BookmarksView = require '../views/BookmarksView'
BookmarkCollection = require '../collections/BookmarkCollection'

module.exports = class MainRouter extends Backbone.Router


  routes:
    "": "new_releases"
    "new_releases/": "new_releases"
    "in_theaters/": "in_theaters"
    "search/:term"  : "search_results"
    "movie/:id"  : "movie"
    "bookmarks/"  : "bookmarks"


  initialize: ->
    @unbindPrimaryView

  unbindPrimaryView: ->
    $("#primary-view-content").empty()
    $("#primary-view-content").unbind()

  ## find dryer way to do this
  routeLoaded: ->
    route = Backbone.history.fragment
    $('.top-nav__link').removeClass('active')
    $(".top-nav__link[href='#/#{route}']").addClass('active')

  new_releases: ->
    @unbindPrimaryView()
    coll = new NewReleasesCollection
    view = new NewReleasesView({ collection: coll })  
    new TopNavView()
    @routeLoaded()
    
  in_theaters: ->
    @unbindPrimaryView()
    coll = new InTheatersCollection
    view = new InTheatersView({ collection: coll })  
    new TopNavView()
    @routeLoaded()
 
  search_results: (term) ->
    @unbindPrimaryView()
    coll = new SearchCollection({query: term})
    view = new SearchResults({ collection: coll, searchTerm: term })
    new TopNavView()
    @routeLoaded()

  movie: (id) ->
    new SingleMovieView({id: id})
    new TopNavView()
    @routeLoaded()

  bookmarks: ->
    @unbindPrimaryView()
    coll = new BookmarkCollection
    view = new BookmarksView({ collection: coll })
    new TopNavView()
    @routeLoaded()


