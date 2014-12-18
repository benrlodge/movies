SingleMovieModel = require '../models/SingleMovieModel'

module.exports = class SingleMovieView extends Backbone.View
  tagName: "li"
  className: "movie-preview"

  render: ->
    templ = Handlebars.compile($("#movie-template").html())
    @$el.html templ(@model.toJSON())
    @