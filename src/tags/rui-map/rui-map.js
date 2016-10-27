self.mounted = false;
self.loaded = false;
self.googleLoaded = false;
self.bingLoaded = false;
self.marker = undefined;

// https://mapicons.mapsmarker.com/category/markers/media/
var icons = {
  none: undefined,
  default: '',
  star: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAAD4ElEQVRYhb2XzU/yWBSHHwqU0mhRVMAQDFFJTMibyZTVOBsXuudfZOnOHQsSExMnLhR04hIXulKDmAClqbWUWdh2ivJRDL4nubm0vZzn19Nzbu4JDYdDAI6OjiKAAIjOHGGxZgE2YAJ2rVazAELD4dCFi4DkDNERICwIbjsCTMBwhlmr1azQ4eGhC5cBxZklfiYCBqADXWc23beUHHhKVdWLBYNHrNFo/OX8tAHLH3pZVdWLfD6PLMtIkrRQsGEY6LoOcNFoNH7hfAZ/4knAj8CBzz7dPBPcbHdHYLhlWXS7XW+eU4THdLN87mzXdZ1wOMz29jb9fn/ev3vMb5eZpmnk83l2dnZ4f3/Hsqxv+fmWAMuysCyLYrFIKpVCURQ3wX6PAF3XURSFdDoNQKFQoNfr/T4BmqZRKBS861KpxGAwwDTNuX1N3O10XafX6zEYDBgMBiPPhsMhxWLRu04kEqRSKZ6engiFQt79UChENBolEomwtrY2nwBZlslms+zt7Y197obftXK5TKfT+bKu3+9zc3MzCTM9As/Pz4iiyMHBwUQHriUSCRKJxMi9ZrPJ2dkZtm1/LwKWZXF5ecnDwwPlcvkLYJqdnp5Sr9eJx+MT4TAjCRVFIZPJ0G63qVQqNJvNmeBOp0OlUqFer7OyssLGxgaCMBkzswpEUWRzcxNBEDg5OeH29nbiWsMwqFQqvLy8kMlkUBRlpuBAZSgIghfGaZ9BkiRisRjLy8uIohjEdfB9QNd1YrEYW1tbU9cVCgXe3t6Cup1PgH/zAbi6uqJarWIYhncvl8thGAa2bQfyG/jYZRgGu7u73u9qtcrd3R3wUW7lcpmtrS0KhQKxWAzDMJBleTECTNMkGo2Sy+VoNptUq1VM02R9fR1Jkmi1WhwfH1Mqldjf3yeXy9FutwO9WCABoiiyurrK+fk519fXxONxstmsV17pdJput0uj0aDVaqEoCuFweHECTNPEsiweHx9JJpMsLS19WaMoCpIkoWkapmnOnQNTV4ui6JXVtPIKus7PFPg4r7tjJKMXbT7fHlPg/3bJgI9y+wkRvmM5DssE7IgPrjtNw9jGJJ/Pk0wmA8FeX1+5v78f+8xh6Pj6Atu56DoLfjHamrmb1T/ATBEuvNFo/O3ccvPrc2tmAHaQ5tQ7w6uqWp8WCR+8xGhuTW5OZ7Tn7uxv367HifDB//SH+JOA8e35NHOEScCSM2RVVf/1i/DB/3DgmjMMFzTJZgqYIGLJjQTgf3ONOeCBBYwRoTgi6oD7zTU+kiswfC4Bn0TIznC3O5OP0OvzwOcW4BPhJqVbqm6JmfPAAf4DkqLjkHLgbUIAAAAASUVORK5CYII=',
  info: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAlCAYAAAAjt+tHAAADiklEQVRYhbWXwU/6SBTHP21JwVJ+ICZeCJEYuai4bj1t9iox3rz4PxrP3riZbEiMPzabwEENRvTgwYQQrKXW0u6BGba48JOqTPIyZTrM99P33kzmKWEYAlCtVhOACuiiT/C9zQcCwAOCWq3mAyhhGEpxHUgJ0wWA+k3igQDwAFeYV6vVfGV/f1+KG8AP0adYjAdcwAH6ovfkV6aE+KplWfVvFp5ojUbjD/EYAH7U9YZlWfVSqYRhGKRSqW8Vdl0Xx3EA6o1Go4IIQzTxUsBCxIH3a8o8U2W2S1uI+BSIsaZMtE9nu23bvLy8oCgKYRiSTCbJ5XLz/FX9kjCM4trtdimXyxwdHbG3t0e/32cwGMy9xpe2mu/7FAoFDg8PASgWizw+PmLb9txrfMkDqqqSz+cnxoIgiLfGVwCCIODm5oaHhwds2+b8/JxOpxNrjU+F4O3tjV6vN471yckJAIqikM1mWVpaWhzA8/MzjuNgGAYHBwcUCgWSySQXFxfU63Wy2Wys9WKFwLZtPM9jd3eXarXK2toahmGgaRqbm5soihJLPDZAGIZsbW2Rz+c5PT3F87zxu6enJ4bD4WIBFEVBVVVqtRobGxuYpjl+d3t7SzKZXCxAGIbc39/j+z47Ozvjcd/3ubq6ipV8nwLIZDLYtk0mk2F9fX083m63cV0XwzAWCwCjRKxUKhMJ12q10HUdVVXxfX9xAK7rEgQB29vbE0DtdhvTNBkMBos9CV9fXykUChN7/fr6Gk3TqFarLC8vo6rxnBprtud5FIvFiTFN0zg+Ph4fyQv1gKZppNPpibFyuczl5SWtVgvTNNF1PRZA7KO42WySy+UIgoBOp0Oz2cT3fVZWVj61DSXAXH4zTZNer8fZ2RnD4ZBEIkE6nSadTseOvdRMMLqvS8N13Zn3Ql3XWV1djSs0bq7rysexpsp/5ZIL4DhOdOK3tci1HKHlAUEiIu6IomFqYVIqlf53+5nVut0ud3d3U98JDYdIXRCIH30xocJkaSaD+xfwIYQUbzQaf4ohmV/vSzMXCOYpTsd3eMuyfv7KExHxPSZza3Zx+kF5Lvto+fb3NIiI+O9RF78DmF6e/6oJsBRgCjMsy/onChER/02I28JcKTSrfQgwA8KUngCiX24TQ3xugCkQPwTET0DG3GaUXHOLxwJ4B2EIkwe/x8j1Thzx2AARCJmUcqvKLebFEQf4FywJwcz6jVtTAAAAAElFTkSuQmCC'
};

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

    self.updateZoom();
    self.setCenter(self.lat, self.lng);
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
  self.setZoom(self.zoom);
}

self.setZoom = function (zoom) {
  self.zoom = zoom;
  if (self.loaded && self.googleLoaded) {
    self.map.setZoom(self.zoom);
  } else if (self.loaded && self.bingLoaded) {
    self.map.setView({
      zoom: self.zoom
    });
  }
};

self.setCenter = function (lat, lng) {
  if (self.loaded && self.googleLoaded) {
    self.map.setCenter({
      lat: lat,
      lng: lng
    });
  }
};

self.on('mount', function () {
  self.display = opts.display ? opts.display : 'block';
  self.lat = opts.lat ? opts.lat : undefined;
  self.lng = opts.lng ? opts.lng : undefined;
  self.icon = opts.hicon ? opts.icon : 'none';
  self.xsZoom = opts.xsZoom ? opts.xsZoom : undefined;
  self.smZoom = opts.smZoom ? opts.smZoom : undefined;
  self.mdZoom = opts.mdZoom ? opts.mdZoom : undefined;
  self.lgZoom = opts.lgZoom ? opts.lgZoom : undefined;
  self.xlZoom = opts.xlZoom ? opts.xlZoom : undefined;
  self.updateZoom();

  self.googleKey = opts.googleKey ? opts.googleKey : undefined;
  self.bingKey = opts.bingKey ? opts.bingKey : undefined;

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
    self.lat = opts.lat ? opts.lat : undefined;
    self.lng = opts.lng ? opts.lng : undefined;
    self.xsZoom = opts.xsZoom ? opts.xsZoom : undefined;
    self.smZoom = opts.smZoom ? opts.smZoom : undefined;
    self.mdZoom = opts.mdZoom ? opts.mdZoom : undefined;
    self.lgZoom = opts.lgZoom ? opts.lgZoom : undefined;
    self.xlZoom = opts.xlZoom ? opts.xlZoom : undefined;
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

  if (icons[self.icon] !== undefined) {
    self.marker = new window.google.maps.Marker({
      position: {
        lat: self.lat,
        lng: self.lng
      },
      map: self.map,
      icon: icons[self.icon]
    });
  }

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

    if (icons[self.icon] !== undefined) {
      self.marker = new Microsoft.Maps.Pushpin(new window.Microsoft.Maps.Location(self.lat, self.lng), {
        icon: icons[self.icon]
      });
      self.map.entities.push(self.marker);
    }
  } catch (e) {
    self.loaded = false;
    setTimeout(function () {
      self.bus.trigger('rui-map-bing-ready');
    });
  }
});
