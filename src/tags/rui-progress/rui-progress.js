self.on('update', e => {
  var minValue = 0;
  var percent = 100;

  self.showLabel = opts.hasOwnProperty('showLabel') ? opts.showLabel === '' || opts.showLabel === 'show-label' || opts.showLabel === true : false;
  self.value = opts.hasOwnProperty('value') ? parseFloat(opts.value) : minValue;
  self.min = opts.hasOwnProperty('min') ? parseFloat(opts.min) : minValue;
  self.max = opts.hasOwnProperty('max') ? parseFloat(opts.max) : percent;

  self.width = ((self.value - self.min) * percent) / (self.max - self.min);
  if (self.showLabel) {
    self.label = Math.round(self.width) + '% Complete';
  }
});
