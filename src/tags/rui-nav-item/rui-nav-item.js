self.click = function (e) {
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

self.on('update', function (e) {
  self.disabled = Object.prototype.hasOwnProperty.call(opts, 'disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;
  self.root.setAttribute('data-disabled', this.disabled);
});
