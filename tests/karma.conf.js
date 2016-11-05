
module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'https://cdnjs.cloudflare.com/ajax/libs/riot/2.6.4/riot.min.js',
      // 'http://cdn.jsdelivr.net/riot/3.0.0-alpha.11/riot.js',
      '../build/lib/*.js',
      './colors.js',
      './*.spec.js'
    ],
    exclude: [
      '../build/lib/rui-full.js'
    ],
    preprocessors: {
    },
    reporters: ['kjhtml', 'spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['PhantomJS'],
    singleRun: true,
    concurrency: Infinity
  });
};
