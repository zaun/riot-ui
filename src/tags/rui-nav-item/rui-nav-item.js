self.click = e => {
  e.stopPropagation();
  if (this.disabled) {
    return;
  }
  if (opts.href) {
    e.preventUpdate = true;
    location.href = opts.href;
    return;
  }
  self.triggerDomEvent('click');
};

self.on('update', e => {
  self.disabled = opts.hasOwnProperty('disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;
  self.root.setAttribute('data-disabled', this.disabled);
});
