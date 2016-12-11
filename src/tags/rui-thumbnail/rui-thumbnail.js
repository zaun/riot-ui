self.on('update', function () {
  self.src = opts.src ? opts.src : '';
  self.title = opts.title ? opts.title : '';
});

self.on('mount', function (e) {
  self.update();
});
