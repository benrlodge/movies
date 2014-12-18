devMode = true
window.log = (m) -> 
  console.log m if devMode


Router = require './routers/main-router.js'
main_app_router = new Router
Backbone.history.start()



# Set active class on navigation
main_app_router.on 'route', (route) ->
  $('.top-nav__link').removeClass('active')
  $(".top-nav__link[href='#/#{route}/']").addClass('active')
  return



## Handlebars Helpers
## ==========================

Handlebars.registerHelper "foreach", (arr, options) ->
  return options.inverse(this)  if options.inverse and not arr.length
  arr.map((item, index) ->
    item.$index = index
    item.$notLast = index != arr.length - 1
    item.$first = index is 0
    item.$last = index is arr.length - 1
    options.fn item
  ).join ""



Handlebars.registerHelper "truncate", (str, len) ->
  if str.length > len and str.length > 0
    new_str = str + " "
    new_str = str.substr(0, len)
    new_str = str.substr(0, new_str.lastIndexOf(" "))
    new_str = (if (new_str.length > 0) then new_str else str.substr(0, len))
    return new Handlebars.SafeString(new_str + "...")
  str



Handlebars.registerHelper "bookmarkStatusIcon", (status) ->
  if status
    return "fa-star active"
  else
    return "fa-star-o"
  str

