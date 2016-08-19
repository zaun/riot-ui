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

    self.updateZoom();

    if (self.loaded && self.googleLoaded) {
      var currCenter = self.map.getCenter();
      window.google.maps.event.trigger(self.map,'resize');
      self.map.setCenter(currCenter);
    }
  }
}

self.updateZoom = function () {
  var defaultZoomLevel = 8;

  switch(self.getSize()) {
  case 'xs':
    if (self.xsZoom) {
      self.zoom = self.xsZoom;
    } else {
      self.zoom = defaultZoomLevel;
    }
    break;
  case 'sm':
    if (self.smZoom) {
      self.zoom = self.smZoom;
    } else if (self.xsZoom) {
      self.zoom = self.xsZoom;
    } else {
      self.zoom = defaultZoomLevel;
    }
    break;
  case 'md':
    if (self.mdZoom) {
      self.zoom = self.mdZoom;
    } else if (self.smZoom) {
      self.zoom = self.smZoom;
    } else if (self.xsZoom) {
      self.zoom = self.xsZoom;
    } else {
      self.zoom = defaultZoomLevel;
    }
    break;
  case 'lg':
    if (self.lgZoom) {
      self.zoom = self.lgZoom;
    } else if (self.mdZoom) {
      self.zoom = self.mdZoom;
    } else if (self.smZoom) {
      self.zoom = self.smZoom;
    } else if (self.xsZoom) {
      self.zoom = self.xsZoom;
    } else {
      self.zoom = defaultZoomLevel;
    }
    break;
  case 'xl':
    if (self.xlZoom) {
      self.zoom = self.xlZoom;
    } else if (self.lgZoom) {
      self.zoom = self.lgZoom;
    } else if (self.mdZoom) {
      self.zoom = self.mdZoom;
    } else if (self.smZoom) {
      self.zoom = self.smZoom;
    } else if (self.xsZoom) {
      self.zoom = self.xsZoom;
    } else {
      self.zoom = defaultZoomLevel;
    }
    break;
  default:
    self.zoom = defaultZoomLevel;
  }

  self.zoom = parseInt(self.zoom);
  console.log(self.getSize(), self.zoom);
  self.setZoom(self.zoom);
}

self.setZoom = function (zoom) {
  self.zoom = zoom;
  if (self.loaded && self.googleLoaded) {
    console.log('Google: setZoom ', self.zoom);
    self.map.setZoom(self.zoom);
  }
};

self.on('mount', function () {
  self.display = opts.hasOwnProperty('display') ? opts.display : 'block';
  self.lat = opts.hasOwnProperty('lat') ? opts.lat : undefined;
  self.lng = opts.hasOwnProperty('lng') ? opts.lng : undefined;
  self.xsZoom = opts.hasOwnProperty('xsZoom') ? opts.xsZoom : undefined;
  self.smZoom = opts.hasOwnProperty('smZoom') ? opts.smZoom : undefined;
  self.mdZoom = opts.hasOwnProperty('mdZoom') ? opts.mdZoom : undefined;
  self.lgZoom = opts.hasOwnProperty('lgZoom') ? opts.lgZoom : undefined;
  self.xlZoom = opts.hasOwnProperty('xlZoom') ? opts.xlZoom : undefined;
  self.updateZoom();

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
    self.xsZoom = opts.hasOwnProperty('xsZoom') ? opts.xsZoom : undefined;
    self.smZoom = opts.hasOwnProperty('smZoom') ? opts.smZoom : undefined;
    self.mdZoom = opts.hasOwnProperty('mdZoom') ? opts.mdZoom : undefined;
    self.lgZoom = opts.hasOwnProperty('lgZoom') ? opts.lgZoom : undefined;
    self.xlZoom = opts.hasOwnProperty('xlZoom') ? opts.xlZoom : undefined;
    self.updateZoom();

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
  self.resizeMap();

  self.loaded = true;
});

self.on('rui-map-bing-ready', function () {
  if (self.loaded || !self.bingKey) {
    return;
  }

  self.resizeMap();
  try {
    self.loaded = true;
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
    self.loaded = false;
    setTimeout(function () {
      self.bus.trigger('rui-map-bing-ready');
    });
  }
});
