
self.click = function (e) {
  e.stopPropagation();
  if (this.disabled) {
    return;
  }

  self.root.value = this.value = !this.value;
  self.triggerDomEvent('click');
};

self.on('update', function (e) {
  self.disabled = Object.prototype.hasOwnProperty.call(opts, 'disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;
  self.left = opts.left ? opts.left : 'On';
  self.right = opts.right ? opts.right : 'Off';
  self.knob = opts.knob ? opts.knob : '';

  self.root.setAttribute('data-disabled', this.disabled);

  // this.root.value = this.value = opts.hasOwnProperty('value') ? true : false;
});
