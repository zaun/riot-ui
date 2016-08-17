
self.click = e => {
  e.stopPropagation();
  if (this.disabled) {
    return;
  }

  self.root.value = this.value = !this.value;
  self.triggerDomEvent('click');
};

self.on('update', e => {
  self.disabled = opts.hasOwnProperty('disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;
  self.left = opts.hasOwnProperty('left') ? opts.left : 'On';
  self.right = opts.hasOwnProperty('right') ? opts.right : 'Off';
  self.knob = opts.hasOwnProperty('knob') ? opts.knob : '';

  self.root.setAttribute('data-disabled', this.disabled);

  // this.root.value = this.value = opts.hasOwnProperty('value') ? true : false;
});
