self.on('update', function (e) {
  var minValue = 0;
  var percent = 100;

  self.showLabel = Object.prototype.hasOwnProperty.call(opts, 'showLabel') ? opts.showLabel === '' || opts.showLabel === 'show-label' || opts.showLabel === true : false;
  self.value = opts.value ? parseFloat(opts.value) : minValue;
  self.min = opts.min ? parseFloat(opts.min) : minValue;
  self.max = opts.max ? parseFloat(opts.max) : percent;

  self.width = ((self.value - self.min) * percent) / (self.max - self.min);
  if (self.showLabel) {
    self.label = Math.round(self.width) + '% Complete';
  }
});
