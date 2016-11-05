window._rui = window._rui || {};
window._rui.headers = window._rui.headers || {};

function getOffset( elem ) {
  var offset = 0 - elem.offsetHeight;
  do {
    if (!isNaN(elem.offsetTop)) {
      offset += elem.offsetTop;
    }
    elem = elem.parentNode;
  } while (elm);
  return offset;
}

self.on('update', function (e) {
  self.noToc = Object.prototype.hasOwnProperty.call(opts, 'noToc') ? opts.noToc === '' || opts.noToc === 'no-toc' || opts.noToc === true : false;
  self.level = opts.level ? opts.level : '1';

  if(!self.id) {
    self.id = self.generateUUID();
  }
});

self.on('updated', function (e) {
  var bounds = self.root.getBoundingClientRect();
  if (bounds.top && !self.noToc) {
    window._rui.headers[self.id] = {
      title: self.root.innerText.trim(),
      level: self.level,
      top: bounds.top
    };
  } else {
    delete window._rui.headers[self.id];
  }
  self.bus.trigger('rui-toc-update');
});
