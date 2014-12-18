(function() {
  var Router, devMode, main_app_router;

  devMode = true;

  window.log = function(m) {
    if (devMode) {
      return console.log(m);
    }
  };

  Router = require('./routers/main-router.js');

  main_app_router = new Router;

  Backbone.history.start();

  main_app_router.on('route', function(route) {
    $('.top-nav__link').removeClass('active');
    $(".top-nav__link[href='#/" + route + "/']").addClass('active');
  });

  Handlebars.registerHelper("foreach", function(arr, options) {
    if (options.inverse && !arr.length) {
      return options.inverse(this);
    }
    return arr.map(function(item, index) {
      item.$index = index;
      item.$notLast = index !== arr.length - 1;
      item.$first = index === 0;
      item.$last = index === arr.length - 1;
      return options.fn(item);
    }).join("");
  });

  Handlebars.registerHelper("truncate", function(str, len) {
    var new_str;
    if (str.length > len && str.length > 0) {
      new_str = str + " ";
      new_str = str.substr(0, len);
      new_str = str.substr(0, new_str.lastIndexOf(" "));
      new_str = (new_str.length > 0 ? new_str : str.substr(0, len));
      return new Handlebars.SafeString(new_str + "...");
    }
    return str;
  });

  Handlebars.registerHelper("bookmarkStatusIcon", function(status) {
    if (status) {
      return "fa-star active";
    } else {
      return "fa-star-o";
    }
    return str;
  });

}).call(this);
