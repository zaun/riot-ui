self.disabled = undefined;
self.checked = false;

self.click = function (e) {
  e.stopPropagation();
  if (self.disabled) {
    return;
  }
  self.root.value = self.value = self.checked = !self.checked;
  self.triggerDomEvent('click');
};

self.on('update', function (e) {
  if (!self.isMounted) {
    return;
  }

  self.disabled = Object.prototype.hasOwnProperty.call(opts, 'disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;
  self.root.querySelector('span').setAttribute('data-disabled', this.disabled);
});

self.on('mount', function () {
  self.update();
});
