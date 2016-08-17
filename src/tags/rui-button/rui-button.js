self.active = false;
self.currentActiveProp = undefined;
self.block = undefined;
self.disabled = undefined;

self.click = e => {
  e.stopPropagation();
  if (self.disabled) {
    return;
  }
  if (opts.href) {
    e.preventUpdate = true;
    location.href = opts.href;
    return;
  }

  if (self.isToggle) {
    self.root.active = self.currentActiveProp = self.active = !self.active;
  }

  self.triggerDomEvent('click');
};

self.on('update', e => {
  self.isToggle = opts.hasOwnProperty('toggle') ? opts.toggle === '' || opts.toggle === 'toggle' || opts.toggle === true : false;
  if (!self.isToggle) {
    self.active = opts.hasOwnProperty('active') ? opts.active === '' || opts.active === 'active' || opts.active === true : false;
    if (self.currentActiveProp !== self.active) {
      self.root.active = self.currentActiveProp = self.active;
    }
  }

  self.block = opts.hasOwnProperty('block') ? opts.block === '' || opts.block === 'block' || opts.block === true : false;
  self.disabled = opts.hasOwnProperty('disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;

  self.root.setAttribute('data-active', this.active);
  self.root.setAttribute('data-block', this.block);
  self.root.setAttribute('data-disabled', this.disabled);
});
