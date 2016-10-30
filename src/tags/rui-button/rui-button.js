self.active = false;
self.currentActiveProp = undefined;
self.block = undefined;
self.disabled = undefined;

self.click = function (e) {
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

self.on('update', function (e) {
  self.isToggle = Object.prototype.hasOwnProperty.call(opts, 'toggle') ? opts.toggle === '' || opts.toggle === 'toggle' || opts.toggle === true : false;
  if (!self.isToggle) {
    self.active = Object.prototype.hasOwnProperty.call(opts, 'active') ? opts.active === '' || opts.active === 'active' || opts.active === true : false;
    if (self.currentActiveProp !== self.active) {
      self.root.active = self.currentActiveProp = self.active;
    }
  } else {
    self.root.active = self.currentActiveProp = false;
  }

  self.block = Object.prototype.hasOwnProperty.call(opts, 'block') ? opts.block === '' || opts.block === 'block' || opts.block === true : false;
  self.disabled = Object.prototype.hasOwnProperty.call(opts, 'disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;

  self.root.setAttribute('data-active', this.active);
  self.root.setAttribute('data-block', this.block);
  self.root.setAttribute('data-disabled', this.disabled);
});
