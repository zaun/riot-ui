self.alertShow = false;

self.fade = function (element) {
  var op = 0.8;
  var timer = setInterval(function () {
    if (op <= 0.1){
      clearInterval(timer);
      element.style.display = 'none';
    }
    element.style.opacity = op;
    element.style.filter = 'alpha(opacity=' + op * 100 + ')';
    op -= op * 0.05;
  }, 5);
}

window.rui.alert = function (option, message) {
  if (!message) {
    message = option;
    option = 'secondary';
  }

  var alert = document.createElement('div');
  alert.className = 'alert';
  alert.innerHTML = message;
  self.root.insertBefore(alert, self.root.firstChild);

  if (option) {
    alert.setAttribute('option', option);
  }

  var cancelTimout = setTimeout(function () {
    self.fade(alert);
  }, 5000);
}

self.alertClose = function () {
  self.alertMessage = '';
  self.alertShow = false;
}
