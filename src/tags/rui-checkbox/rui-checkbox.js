self.disabled = undefined;
self.checked = false;

self.click = e => {
  e.stopPropagation();
  if (self.disabled) {
    return;
  }
  self.root.value = self.value = self.checked = !self.checked;
  self.triggerDomEvent('click');
};

self.on('update', e => {
  self.disabled = opts.hasOwnProperty('disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;
  self.root.querySelector('span').setAttribute('data-disabled', this.disabled);
});
