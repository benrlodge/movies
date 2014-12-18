class TopNavView extends Backbone.View
  
  el: $ "#top-nav"
  
  initialize: ->
    @templ = Handlebars.compile($("#top-nav-template").html())
    @render()

  keyPressEventHandler: (e) ->
      if(e.keyCode == 13)
        @searchTerm = $(e.currentTarget).val()
        @search()

  render: ->
    $(@el).html @templ()
    return @

  events:
    "keyup .top-nav__search" : "keyPressEventHandler"

  search: ->
    window.location.hash = '#search/'+@searchTerm


module.exports = TopNavView