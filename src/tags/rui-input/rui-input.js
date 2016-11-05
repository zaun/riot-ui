self.disabled = undefined;
self.currentValueProp = undefined;

var NOT_FOUND = -1;

var getKey = function (event) {
  if (window.event) {
    return window.event.keyCode;
  } else if (e) {
    return e.which;
  }
};

var isAlpha = function (key) {
  return (key >= keyCodes.A && key <= keyCodes.Z);
};

var isNumber = function (key) {
  return (key >= keyCodes.NUM_0 && key <= keyCodes.NUM_9) || (key >= keyCodes.NUMPAD_0 && key <= keyCodes.NUMPAD_9);
};

var isHexLetter = function (key) {
  return (key >= keyCodes.A && key <= keyCodes.F);
};

var isPoint = function (key) {
  return key === keyCodes.PERIOD || key === keyCodes.DECIMAL;
};

var isEdit = function (key) {
  return key === keyCodes.BACKSPACE  ||
         key === keyCodes.TAB  ||
         key === keyCodes.DELETE ||
         (key >= keyCodes.END && key <= keyCodes.DOWN);
};

var isSpecial = function (event) {
  return event.shiftKey || event.altKey || event.ctrlKey;
};

var mode = {
  alpha: function (event) {
    var key = getKey(event);
    return isAlpha(key) || isEdit(key);
  },
  alphanumeric: function (event) {
    var key = getKey(event);
    var special = isSpecial(event);
    return isAlpha(key) || (isNumber(key) && !special) || isEdit(key);
  },
  decimal: function (event) {
    var key = getKey(event);
    var special = isSpecial(event);
    var hasPoint = event.target.value.indexOf('.') > NOT_FOUND;
    return (!hasPoint && isPoint(key)) || (isNumber(key) && !special) || isEdit(key);
  },
  integer: function (event) {
    var key = getKey(event);
    var special = isSpecial(event);
    return (isNumber(key) && !special) || isEdit(key);
  },
  hex: function (event) {
    var key = getKey(event);
    var special = isSpecial(event);
    return isHexLetter(key) || (isNumber(key) && !special) || isEdit(key);
  }
};

self.change = function (e) {
  e.stopPropagation();
  if (self.disabled) {
    return;
  }
  self.triggerDomEvent('change');
};

self.keydown = function (e) {
  e.stopPropagation();
  if (self.disabled) {
    return;
  }

  var valid = true;
  if (mode[self.mode]) {
    valid = mode[self.mode](e);
  }

  if (valid) {
    self.triggerDomEvent('keydown');
  }
  return valid;
};

self.keyup = function (e) {
  e.stopPropagation();
  if (self.disabled) {
    return;
  }

  self.root.value = self.value = e.target.value;
  self.triggerDomEvent('keyup');
};

self.focus = function (e) {
  e.stopPropagation();
  if (self.disabled) {
    e.target.blur();
    return;
  }
  self.triggerDomEvent('focus');
};

self.blur = function (e) {
  e.stopPropagation();
  if (self.disabled) {
    return;
  }
  self.triggerDomEvent('blur');
};

self.on('update', function (e) {
  self.mode = opts.type ? opts.type.toLowerCase() : 'text';
  self.disabled = Object.prototype.hasOwnProperty.call(opts, 'disabled') ? opts.disabled === '' || opts.disabled === 'disabled' || opts.disabled === true : false;

  var value = opts.value ? opts.value : '';
  if (self.currentValueProp !== value) {
    self.root.value = self.value = self.currentValueProp = value;
  }
  self.root.setAttribute('data-disabled', self.disabled);
});

/* Public API */

self.root.clear = function (focus) {
  if (focus === undefined) {
    focus = true;
  }
  self.root.value = self.value = '';
  self.update();
  if (focus) {
    self.root.focus();
  }
};

self.root.focus = function () {
  self.root.querySelector('input').focus();
};

self.root.blur = function () {
  self.root.querySelector('input').blur();
};
