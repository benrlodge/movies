(function() {
  var Bookmark,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  module.exports = Bookmark = (function(_super) {
    __extends(Bookmark, _super);

    function Bookmark() {
      return Bookmark.__super__.constructor.apply(this, arguments);
    }

    Bookmark.prototype.idAttribute = "_id";

    return Bookmark;

  })(Backbone.Model);

}).call(this);
