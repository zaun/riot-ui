var expectDisabled = function (el) {
  var clicked = false;
  el.addEventListener('click', function () {
    clicked = true;
  });
  el.childNodes[0].click();

  expect(el.getAttribute('data-disabled')).toEqual('true');
  expect(clicked).toEqual(false);

  var style = window.getComputedStyle(el.childNodes[0]);
  expect(style.cursor).toEqual('not-allowed');
  expect(style.opacity).not.toEqual('1')
}

var expectEnabled = function (el) {
  var clicked = false;
  el.addEventListener('click', function () {
    clicked = true;
  });
  el.childNodes[0].click();
  waitsFor(function() { return clicked; }, "Button click", 5000);

  expect(el.getAttribute('data-disabled')).toEqual('false');
  expect(clicked).toEqual(true);

  var style = window.getComputedStyle(el.childNodes[0]);
  expect(style.cursor).toEqual('pointer');
  expect(style.opacity).toEqual('1')
}

describe('rui-button tests', function() {

  it('Mount tag', function() {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();
  });

  it('Button label and size', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.childNodes.length).toEqual(1);
    expect(el.childNodes[0].tagName).toEqual('DIV');
    expect(el.childNodes[0].innerHTML).toEqual('Test Button');

    var style = window.getComputedStyle(el.childNodes[0]);
    expect(style.fontSize).toEqual('16px');
    style = window.getComputedStyle(el);
    expect(style.display).toEqual('inline-block');
  });

  describe('Enabled button (no disabled attribute)', function () {
    var el, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      document.body.appendChild(el)

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) { done() }
      }, 250);

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      el.childNodes[0].click();
    });

    it('should be enabled', function () {
      expect(el.getAttribute('data-disabled')).toEqual('false');
      expect(clicked).toEqual(true);

      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.cursor).toEqual('pointer');
      expect(style.opacity).toEqual('1')
    });
  });

  describe('Enabled button (disabled="{ false }")', function () {
    var el, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('disabled', '{ false }');
      document.body.appendChild(el)

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) { done() }
      }, 250);

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      el.childNodes[0].click();
    });

    it('should be enabled', function () {
      expect(el.getAttribute('data-disabled')).toEqual('false');
      expect(clicked).toEqual(true);

      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.cursor).toEqual('pointer');
      expect(style.opacity).toEqual('1')
    });
  });

  describe('Disabled button (disabled)', function () {
    var el, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('disabled', '');
      document.body.appendChild(el)

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) { done() }
      }, 250);

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      el.childNodes[0].click();
    });

    it('should be disabled', function () {
      expect(el.getAttribute('data-disabled')).toEqual('true');
      expect(clicked).toEqual(false);

      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.cursor).toEqual('not-allowed');
      expect(style.opacity).not.toEqual('1')
    });
  });

  describe('Disabled button (disabled="disabled")', function () {
    var el, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('disabled', 'disabled');
      document.body.appendChild(el)

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) { done() }
      }, 250);

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      el.childNodes[0].click();
    });

    it('should be disabled', function () {
      expect(el.getAttribute('data-disabled')).toEqual('true');
      expect(clicked).toEqual(false);

      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.cursor).toEqual('not-allowed');
      expect(style.opacity).not.toEqual('1')
    });
  });

  describe('Disabled button (disabled="{ true }")', function () {
    var el, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('disabled', '{ true }');
      document.body.appendChild(el)

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) { done() }
      }, 250);

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      el.childNodes[0].click();
    });

    it('should be disabled', function () {
      expect(el.getAttribute('data-disabled')).toEqual('true');
      expect(clicked).toEqual(false);

      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.cursor).toEqual('not-allowed');
      expect(style.opacity).not.toEqual('1')
    });
  });

  it('Small size', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('size', 'sm');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    var style = window.getComputedStyle(el.childNodes[0]);
    expect(style.fontSize).toEqual('14px');
  });

  it('Large size', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('size', 'lg');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    var style = window.getComputedStyle(el.childNodes[0]);
    expect(style.fontSize).toEqual('20px');
  });

  it('Block (block)', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('block', '');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.getAttribute('data-block')).toEqual('true');
    var style = window.getComputedStyle(el);
    expect(style.display).toEqual('block');
  });

  it('Block (block="block")', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('block', 'block');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.getAttribute('data-block')).toEqual('true');
    var style = window.getComputedStyle(el);
    expect(style.display).toEqual('block');
  });

  it('Block (block="{ true }")', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('block', '{ true }');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.getAttribute('data-block')).toEqual('true');
    var style = window.getComputedStyle(el);
    expect(style.display).toEqual('block');
  });

  it('Block (block="{ false }")', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('block', '{ false }');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.getAttribute('data-block')).toEqual('false');
    var style = window.getComputedStyle(el);
    expect(style.display).toEqual('inline-block');
  });

  it('Active (active)', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('active', '');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.getAttribute('data-active')).toEqual('true');
  });

  it('Active (active="active")', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('active', 'active');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.getAttribute('data-active')).toEqual('true');
  });

  it('Active (active="{ true }")', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('active', '{ true }');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.getAttribute('data-active')).toEqual('true');
  });

  it('Active (active="{ false }")', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('active', '{ false }');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.getAttribute('data-active')).toEqual('false');
  });

  it('Toggle button', function () {
    // Create the tag
    var el = document.createElement('rui-button')
    el.innerHTML = 'Test Button';
    el.setAttribute('toggle', '');
    document.body.appendChild(el)

    // Mount the tag
    tag = riot.mount('rui-button')[0]
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.getAttribute('data-active')).toEqual('false');
    el.childNodes[0].click();
    expect(el.getAttribute('data-active')).toEqual('true');
    el.childNodes[0].click();
    expect(el.getAttribute('data-active')).toEqual('false');
  });


  describe('Verify styles', function () {

    it('Default style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.default.borderColor);
      expect(style.color).toEqual(window.colors.default.color);
      expect(style.backgroundColor).toEqual(window.colors.default.backgroundColor);
    });

    it('Primary style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'primary');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.primary.borderColor);
      expect(style.color).toEqual(window.colors.primary.color);
      expect(style.backgroundColor).toEqual(window.colors.primary.backgroundColor);
    });

    it('Secondary style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'secondary');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.secondary.borderColor);
      expect(style.color).toEqual(window.colors.secondary.color);
      expect(style.backgroundColor).toEqual(window.colors.secondary.backgroundColor);
    });

    it('Success style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'success');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.success.borderColor);
      expect(style.color).toEqual(window.colors.success.color);
      expect(style.backgroundColor).toEqual(window.colors.success.backgroundColor);
    });

    it('Info style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'info');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.info.borderColor);
      expect(style.color).toEqual(window.colors.info.color);
      expect(style.backgroundColor).toEqual(window.colors.info.backgroundColor);
    });

    it('Warning style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'warning');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.warning.borderColor);
      expect(style.color).toEqual(window.colors.warning.color);
      expect(style.backgroundColor).toEqual(window.colors.warning.backgroundColor);
    });

    it('Danger style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'danger');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.danger.borderColor);
      expect(style.color).toEqual(window.colors.danger.color);
      expect(style.backgroundColor).toEqual(window.colors.danger.backgroundColor);
    });

    it('Link style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'link');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.link.borderColor);
      expect(style.color).toEqual(window.colors.link.color);
      expect(style.backgroundColor).toEqual(window.colors.link.backgroundColor);
    });

    it('Primary outline style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'primary-o');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.primaryO.borderColor);
      expect(style.color).toEqual(window.colors.primaryO.color);
      expect(style.backgroundColor).toEqual(window.colors.primaryO.backgroundColor);
    });

    it('Secondary outline style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'secondary-o');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.secondaryO.borderColor);
      expect(style.color).toEqual(window.colors.secondaryO.color);
      expect(style.backgroundColor).toEqual(window.colors.secondaryO.backgroundColor);
    });

    it('Success outline style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'success-o');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.successO.borderColor);
      expect(style.color).toEqual(window.colors.successO.color);
      expect(style.backgroundColor).toEqual(window.colors.successO.backgroundColor);
    });

    it('Info outline style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'info-o');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.infoO.borderColor);
      expect(style.color).toEqual(window.colors.infoO.color);
      expect(style.backgroundColor).toEqual(window.colors.infoO.backgroundColor);
    });

    it('Warning outline style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'warning-o');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.warningO.borderColor);
      expect(style.color).toEqual(window.colors.warningO.color);
      expect(style.backgroundColor).toEqual(window.colors.warningO.backgroundColor);
    });

    it('Danger outline style', function () {
      // Create the tag
      var el = document.createElement('rui-button')
      el.innerHTML = 'Test Button';
      el.setAttribute('option', 'danger-o');
      document.body.appendChild(el)

      // Mount the tag
      tag = riot.mount('rui-button')[0]
      expect(tag).toBeDefined();
      expect(tag.isMounted).toBe(true);
      tag.update();

      // Style
      var style = window.getComputedStyle(el.childNodes[0]);
      expect(style.borderColor).toEqual(window.colors.dangerO.borderColor);
      expect(style.color).toEqual(window.colors.dangerO.color);
      expect(style.backgroundColor).toEqual(window.colors.dangerO.backgroundColor);
    });

  });

});
