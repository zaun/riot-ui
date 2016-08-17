self.mounted = false;
self.loaded = false;
self.googleLoaded = false;
self.bingLoaded = false;

self.checkForGoogleMap = function () {
  if (self.googleLoaded) {
    return;
  }
  if (window.google && window.google.maps && window.google.maps.Map) {
    self.googleLoaded = true;
    self.bus.trigger('rui-map-google-ready');
  } else {
    setTimeout(self.checkForGoogleMap);
  }
}

self.checkForBingMap = function () {
  if (self.googleLoaded) {
    return;
  }
  if (window.Microsoft && window.Microsoft.Maps && window.Microsoft.Maps.Map && window.Microsoft.Maps.Location) {
    self.bingLoaded = true;
    self.bus.trigger('rui-map-bing-ready');
  } else {
    setTimeout(self.checkForBingMap);
  }
}

var lastWidth = 0;
self.resizeMap = function () {
  var container = self.root.querySelector('div');
  if (container && container.offsetWidth && container.offsetWidth !== lastWidth) {
    lastWidth = container.offsetWidth;

    var expectedSize = 2;
    if (self.display.split(':').length === expectedSize) {
      var ratio = {w:0, h:1};
      ratio.w = self.display.split(':').shift();
      ratio.h = self.display.split(':').pop();
      container.style.width = '100%';
      container.style.height = ((container.offsetWidth / ratio.w) * ratio.h) + 'px';
    } else {
      container.style.width = '100%';
      container.style.height = '100%';
    }

    if (self.loaded && self.googleLoaded) {
      window.google.maps.event.trigger(self.map,'resize');
    }
  }
}

self.on('mount', function () {
  var defaultZoomLevel = 8;
  self.display = opts.hasOwnProperty('display') ? opts.display : 'block';
  self.lat = opts.hasOwnProperty('lat') ? opts.lat : undefined;
  self.lng = opts.hasOwnProperty('lng') ? opts.lng : undefined;
  self.zoom = opts.hasOwnProperty('zoom') ? opts.zoom : defaultZoomLevel;

  self.googleKey = opts.hasOwnProperty('googleKey') ? opts.googleKey : undefined;
  self.bingKey = opts.hasOwnProperty('bingKey') ? opts.bingKey : undefined;

  if (self.googleKey) {
    self.loadScript('https://maps.googleapis.com/maps/api/js?key=' + self.googleKey);
    self.checkForGoogleMap();
  } else if (self.bingKey) {
    self.loadScript('https://www.bing.com/api/maps/mapcontrol?branch=release');
    self.checkForBingMap();
  }

  if (self.lat) {
    self.lat = parseInt(self.lat);
  }
  if (self.lng) {
    self.lng = parseInt(self.lng);
  }
});

self.on('update', function () {
  if (self.loaded) {
    self.lat = opts.hasOwnProperty('lat') ? opts.lat : undefined;
    self.lng = opts.hasOwnProperty('lng') ? opts.lng : undefined;

    if (self.lat) {
      self.lat = parseInt(self.lat);
    }
    if (self.lng) {
      self.lng = parseInt(self.lng);
    }
  }
});

self.on('rui-window-resized', function (){
  self.resizeMap();
});

self.on('rui-map-google-ready', function () {
  if (self.loaded || !self.googleKey) {
    return;
  }

  self.resizeMap();
  self.map = new window.google.maps.Map(self.root.querySelector('div'), {
    center: {
      lat: self.lat,
      lng: self.lng
    },
    scrollwheel: false,
    keyboardShortcuts: false,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    mapTypeControl: false,
    rotateControl: false,
    scaleControl: false,
    signInControl: false,
    streetViewControl: false,
    zoomControl: false,
    zoom: self.zoom
  });

  self.loaded = true;
});

self.on('rui-map-bing-ready', function () {
  if (self.loaded || !self.bingKey) {
    return;
  }

  self.resizeMap();
  try {
    self.map = new window.Microsoft.Maps.Map(self.root.querySelector('div'), {
      credentials: self.bingKey,
      center: new window.Microsoft.Maps.Location(self.lat, self.lng),
      disableZooming: true,
      disableKeyboardInput: true,
      disableMouseInput: true,
      disablePanning: true,
      showBreadcrumb: false,
      showDashboard: false,
      showMapTypeSelector: false,
      zoom: self.zoom
    });
  } catch (e) {
    console.log('bing error: ', e);
    setTimeout(function () {
      self.bus.trigger('rui-map-bing-ready');
    });
  }
  self.loaded = true;
});
