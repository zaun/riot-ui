window._rui = window._rui || {};
window._rui.headers = window._rui.headers || {};

self.on('update', e => {
  self.noToc = opts.hasOwnProperty('noToc') ? opts.noToc === '' || opts.noToc === 'no-toc' || opts.noToc === true : false;
  self.level = opts.hasOwnProperty('level') ? opts.level : '1';

  if(!self.id) {
    self.id = self.generateUUID();
  }
});

self.on('updated', e => {
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
