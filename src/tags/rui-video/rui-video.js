self.mounted = false;
self.visible = false;
self.loaded = false;
self.yLoaded = false;
self.vLoaded = false;
self.divId = '';

self.checkForYoutube = function () {
  if (self.yLoaded) {
    return;
  }
  if (window.YT && window.YT.Player) {
    self.yLoaded = true;
    self.bus.trigger('rui-video-youtube-ready');
  } else {
    setTimeout(self.checkForYoutube);
  }
}

self.checkForVimeo = function () {
  if (self.vLoaded) {
    return;
  }
  if (window.Vimeo && window.Vimeo.Player) {
    self.vLoaded = true;
    self.bus.trigger('rui-video-vimeo-ready');
  } else {
    setTimeout(self.checkForVimeo);
  }
}

var lastWidth = 0;
self.resizeIframe = function () {
  var container = self.root.querySelector('div');
  if (container && container.offsetWidth && container.offsetWidth !== lastWidth) {
    var iframe = self.root.querySelector('iframe');
    if (iframe) {
      lastWidth = container.offsetWidth;
      var w = iframe.getAttribute('width');
      var h = iframe.getAttribute('height');
      var ar = h / w;

      iframe.setAttribute('width', container.offsetWidth);
      iframe.setAttribute('height', container.offsetWidth * ar);
    } else {
      setTimeout(function () {
        self.resizeIframe();
      });
    }
  }
};

self.on('rui-window-resized', function (){
  self.resizeIframe();
});

self.on('mount', function () {
  self.mounted = true;
  self.divId = self.generateUUID();
  self.update();
  self.youtubeId = opts.hasOwnProperty('youtubeId') ? opts.youtubeId : undefined;
  self.vimeoId = opts.hasOwnProperty('vimeoId') ? opts.vimeoId : undefined;

  self.loadScript('https://www.youtube.com/iframe_api');
  self.loadScript('https://player.vimeo.com/api/player.js');

  self.checkForYoutube();
  self.checkForVimeo();
});

self.on('updated', function () {
  if (!self.mounted) {
    return;
  }
  if (document.contains(self.root) && !self.visible) {
    self.visible = true;
    self.checkForYoutube();
    self.checkForVimeo();
    self.resizeIframe();
  } else {
    self.visible = false;
  }
});

self.on('rui-video-youtube-ready', function () {
  if (self.loaded) {
    return;
  }

  var div = undefined;
  try {
    div = self.root.querySelector('#vid-' + self.divId);
  } catch (e) {
    div = undefined;
  }

  if (!self.youtubeId || !window.YT || !window.YT.Player || !div) {
    setTimeout(function () {
      self.bus.trigger('rui-video-youtube-ready');
    });
    return;
  }
  self.loaded = true;

  self.player = new window.YT.Player(div, {
    videoId: self.youtubeId,
    events: {
      'onReady': function (e) {
        self.resizeIframe();
      }
    },
    playerVars: {
      playerapiid: self.generateUUID(),
      controls: 1,
      autoplay: 0,
      disablekb: 1,
      enablejsapi: 1,
      'iv_load_policy': 3,
      modestbranding: 1,
      showinfo: 0,
      rel: 0,
      theme:'light'
    }
  });
});

self.on('rui-video-vimeo-ready', function () {
  if (self.loaded) {
    return;
  }

  var div = undefined;
  try {
    div = self.root.querySelector('#vid-' + self.divId);
  } catch (e) {
    div = undefined;
  }

  if (!self.vimeoId || !window.Vimeo || !window.Vimeo.Player || !div) {
    setTimeout(function () {
      self.bus.trigger('rui-video-vimeo-ready');
    });
    return;
  }
  self.loaded = true;

  try {
    var player = new window.Vimeo.Player(div, {
      id: self.vimeoId
    });
    self.resizeIframe();
  } catch (e) {
    var found = -1;
    if (e.message.indexOf('valid element or a valid id') > found) {
      self.loaded = false;
      setTimeout(function () {
        self.bus.trigger('rui-video-vimeo-ready');
      });
    }
  }
});
