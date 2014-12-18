(function() {
  var Loader, delay;

  delay = function(ms, func) {
    return setTimeout(func, ms);
  };

  module.exports = Loader = (function() {
    function Loader(options) {
      if (options) {
        this.msg = options.msg;
      }
    }

    Loader.prototype.show = function() {
      $('.container').hide(800);
      $("#cover").fadeIn(800);
      $('.preloader').fadeIn(800);
      return $('#loader-msg').html(this.msg);
    };

    Loader.prototype.hide = function() {
      $("#cover").fadeOut(400);
      $('.preloader').fadeOut(400);
      return $('.container').fadeIn(1000);
    };

    return Loader;

  })();

}).call(this);
