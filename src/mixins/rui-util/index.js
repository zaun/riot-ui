'use strict';

var RuiUtil = (function() {
  return function() {
    return  {
      init: function() {
        var tag = this;

        if (!window._rui) {
          window._rui = {};
        }

        if (!window.rui) {
          window.rui = {};
        }

        if (!window._rui.resizeEvent) {
          window._rui.resizeEvent = true;
          window.addEventListener('resize', function () {
            if (tag.bus) {
              setTimeout(function () {
                tag.bus.trigger('rui-window-resized');
              });
            }
          });
        }
      },

      loadScript: function (lib) {
        if (!window._rui.scripts) {
          window._rui.scripts = {};
        }
        if (!window._rui.scripts[lib]) {
          window._rui.scripts[lib] = true;
          var script = document.createElement('script');
          script.setAttribute('src', lib);
          document.querySelector('head').appendChild(script);
        }
      },

      /*eslint-disable */
      generateUUID: function () {
        var d = new Date().getTime();
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = (d + Math.random()*16)%16 | 0;
          d = Math.floor(d/16);
          return (c === 'x' ? r : (r&0x3|0x8)).toString(16);
        });
        return uuid;
      },
      /*eslint-enable */

      getSize: function () {
        var xsSize = 300;
        var smSize = 600;
        var mdSize = 944;
        var lgSize = 1200;
        var xlSize = 1840;
        var width = document.body.offsetWidth;
        if (width <= xsSize) {
          return 'xs';
        } else if (width <= smSize) {
          return 'sm';
        } else if (width <= mdSize) {
          return 'md';
        } else if (width <= lgSize) {
          return 'lg';
        } else if (width <= xlSize) {
          return 'xl';
        }
        return 'unknown';
      }
    };
  };
}());

export default new RuiUtil();
