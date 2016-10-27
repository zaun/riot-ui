
self.on('rui-toc-update', function (e) {
  if(window._rui.headers) {
    self.items = Object.keys(window._rui.headers).map(function (key) {
      return window._rui.headers[key];
    });

    self.update();
  }
});
