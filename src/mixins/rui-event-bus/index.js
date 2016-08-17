
'use strict'
var RuiEventBusMixin = (function() {
  var instance = undefined;

  return function() {
    return instance ? instance : instance = {
      init: function() {
        this.bus.tags.push(this);
      },
      bus: {
        tags: [],
        trigger: function(event, params) {
          var i = 0, length = this.tags.length;
          for (i = 0; i < length; i++) {
            this.tags[i].trigger(event, params);
          }
        }
      }
    };
  };
}());

export default new RuiEventBusMixin();
