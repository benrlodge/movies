Loader = require '../helpers/Loader'
MoviePageView = require './MoviePageView'
BookmarkCollection = require '../collections/BookmarkCollection'

module.exports = class InTheatersView extends MoviePageView
  
  el: $ "#primary-view-content"
  
  pageInfo: {
    name: 'In Theaters'
  }

  initialize: ->
    @templ = Handlebars.compile($("#movies-list-template").html())
    @books = new BookmarkCollection
    
    @loadData()
    @listenTo(@collection, "fetchBookmarks", @fetchBookmarks)
    @listenTo(@books, "placeBookmarks", @placeBookmarks)
    



