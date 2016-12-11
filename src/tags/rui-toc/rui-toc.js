
self.on('rui-toc-update', function (e) {
  self.items = [];
  if(window._rui.headers) {
    self.items = Object.keys(window._rui.headers).map(function (key) {
      return window._rui.headers[key];
    });

    self.update();
  }
});

self.scrollTo = function (pos) {
  window.scrollTo(0, pos);
};
