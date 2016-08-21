self.click = e => {
  e.stopPropagation();
  if (this.disabled) {
    return;
  }
  if (opts.href) {
    var xyPos = 0;
    e.preventUpdate = true;
    location.href = opts.href;
    window.scrollTo(xyPos, xyPos);
    return;
  }
  self.triggerDomEvent('click');
};

self.on('update', e => {
  self.disabled = opts.hasOwnProperty('disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;
  self.root.setAttribute('data-disabled', this.disabled);
});
