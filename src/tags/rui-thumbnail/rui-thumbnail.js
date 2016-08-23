self.on('updated', function () {
  self.src = opts.hasOwnProperty('src') ? opts.src : '';
  self.title = opts.hasOwnProperty('title') ? opts.title : '';
});
