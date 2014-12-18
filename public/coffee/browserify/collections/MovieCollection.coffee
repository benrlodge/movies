module.exports = class Movies extends Backbone.Collection

  comparator: (property) ->
    # selectedStrategy.apply myModel.get(property)

  strategies:
    title: (movie) ->
      movie.get "title"

    audience_score: (a, b) ->
      a = a.get('ratings')['audience_score']
      b = b.get('ratings')['audience_score']      
      return 0 if a is b
      if a < b then 1 else -1

    critics_score: (a, b) ->
      a = a.get('ratings')['critics_score']
      b = b.get('ratings')['critics_score']            
      return 0  if a is b
      if a < b then 1 else -1


  changeSort: (sortProperty) ->
    @comparator = @strategies[sortProperty]
    @sort()
    return

  initialize: ->
    @changeSort "title"
    return