self.mounted = false;
self.loaded = false;
self.hLoaded = false;

self.checkForHighlight = function () {
  if (self.hLoaded) {
    return;
  }
  if (window.hljs) {
    self.hLoaded = true;
    self.bus.trigger('rui-highlight-ready');
  } else {
    setTimeout(self.checkForHighlight);
  }
};

self.on('mount', function () {
  self.mounted = true;
  self.dark = Object.prototype.hasOwnProperty.call(opts, 'dark') ? opts.dark === '' || opts.dark === 'dark' || opts.dark === true : false;
  self.lang = opts.lang ? opts.lang : 'HTML';

  self.loadScript('https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.6.0/highlight.min.js');

  self.checkForHighlight();
});

self.on('rui-highlight-ready', function () {
  if (self.loaded) {
    return;
  }
  self.loaded = true;

  var block = self.root.querySelector('pre code');
  window.hljs.highlightBlock(block);
});
