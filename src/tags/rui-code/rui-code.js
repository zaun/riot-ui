self.on('update', function () {
  self.dark = opts.hasOwnProperty('dark') ? opts.dark === '' || opts.dark === 'dark' || opts.dark === true : false;
  self.lang = opts.hasOwnProperty('lang') ? opts.lang : 'HTML';


});
