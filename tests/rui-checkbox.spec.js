describe('rui-checkbox tests', function() {
  it('Mount tag', function() {
    // Create the tag
    var el = document.createElement('rui-checkbox');
    el.innerHTML = 'Test Checkbox';
    document.body.appendChild(el);

    // Mount the tag
    var tag = riot.mount('rui-checkbox')[0];
    expect(tag).toBeTruthy();
    expect(tag.isMounted).toBe(true);
    tag.update();
  });

  it('Checkbox label and size', function () {
    // Create the tag
    var el = document.createElement('rui-checkbox');
    el.innerHTML = 'Test Checkbox';
    document.body.appendChild(el);

    // Mount the tag
    var tag = riot.mount('rui-checkbox')[0];
    expect(tag).toBeTruthy();
    expect(tag.isMounted).toBe(true);
    tag.update();

    // Wrapper div
    expect(el.childNodes.length).toEqual(1);
    expect(el.childNodes[0].tagName).toEqual('SPAN');
    expect(el.childNodes[0].textContent.trim()).toEqual('Test Checkbox');

    var style = window.getComputedStyle(el.childNodes[0]);
    expect(style.fontSize).toEqual('16px');
    style = window.getComputedStyle(el);
    expect(style.display).toEqual('inline-block');
  });

  describe('Enabled checkbox (no disabled attribute)', function () {
    var container = null, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      var el = document.createElement('rui-checkbox');
      el.innerHTML = 'Test Checkbox';
      document.body.appendChild(el);

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) {
          done();
        }
      }, 250);

      // Mount the tag
      var tag = riot.mount('rui-checkbox')[0];
      expect(tag).toBeTruthy();
      expect(tag.isMounted).toBe(true);

      container = el.querySelector('span');
      expect(container).toBeTruthy();
      container.click();
    });

    it('should be enabled', function () {
      expect(container.getAttribute('data-disabled')).toEqual('false');
      expect(clicked).toEqual(true);

      var style = window.getComputedStyle(container);
      expect(style.cursor).toEqual('pointer');
      expect(style.opacity).toEqual('1');
    });
  });

  describe('Enabled checkbox (disabled="{ false }")', function () {
    var container = null, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      var el = document.createElement('rui-checkbox');
      el.innerHTML = 'Test Checkbox';
      el.setAttribute('disabled', '{ false }');
      document.body.appendChild(el);

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) {
          done();
        }
      }, 250);

      // Mount the tag
      tag = riot.mount('rui-checkbox')[0];
      expect(tag).toBeTruthy();
      expect(tag.isMounted).toBe(true);

      container = el.querySelector('span');
      expect(container).toBeTruthy();
      container.click();
    });

    it('should be enabled', function () {
      expect(container.getAttribute('data-disabled')).toEqual('false');
      expect(clicked).toEqual(true);

      var style = window.getComputedStyle(container);
      expect(style.cursor).toEqual('pointer');
      expect(style.opacity).toEqual('1');
    });
  });

  describe('Disabled checkbox (disabled)', function () {
    var container = null, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      var el = document.createElement('rui-checkbox');
      el.innerHTML = 'Test Checkbox';
      el.setAttribute('disabled', '');
      document.body.appendChild(el);

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) {
          done();
        }
      }, 250);

      // Mount the tag
      tag = riot.mount('rui-checkbox')[0];
      expect(tag).toBeTruthy();
      expect(tag.isMounted).toBe(true);

      container = el.querySelector('span');
      expect(container).toBeTruthy();
      container.click();
    });

    it('should be disabled', function () {
      expect(container.getAttribute('data-disabled')).toEqual('true');
      expect(clicked).toEqual(false);

      var style = window.getComputedStyle(container);
      expect(style.cursor).toEqual('not-allowed');
      expect(style.opacity).not.toEqual('1');
    });
  });

  describe('Disabled checkbox (disabled="disabled")', function () {
    var container = null, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      var el = document.createElement('rui-checkbox');
      el.innerHTML = 'Test Checkbox';
      el.setAttribute('disabled', 'disabled');
      document.body.appendChild(el);

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) {
          done();
        }
      }, 250);

      // Mount the tag
      tag = riot.mount('rui-checkbox')[0];
      expect(tag).toBeTruthy();
      expect(tag.isMounted).toBe(true);

      container = el.querySelector('span');
      expect(container).toBeTruthy();
      container.click();
    });

    it('should be disabled', function () {
      expect(container.getAttribute('data-disabled')).toEqual('true');
      expect(clicked).toEqual(false);

      var style = window.getComputedStyle(container);
      expect(style.cursor).toEqual('not-allowed');
      expect(style.opacity).not.toEqual('1');
    });
  });

  describe('Disabled checkbox (disabled="{ true }")', function () {
    var container = null, clicked = false;

    beforeEach(function (done) {
      // Create the tag
      var el = document.createElement('rui-checkbox');
      el.innerHTML = 'Test Checkbox';
      el.setAttribute('disabled', '{ true }');
      document.body.appendChild(el);

      el.addEventListener('click', function () {
        clicked = true;
        done();
      });

      setTimeout(function () {
        if (!clicked) {
          done();
        }
      }, 250);

      // Mount the tag
      tag = riot.mount('rui-checkbox')[0];
      expect(tag).toBeTruthy();
      expect(tag.isMounted).toBe(true);

      container = el.querySelector('span');
      expect(container).toBeTruthy();
      container.click();
    });

    it('should be disabled', function () {
      expect(container.getAttribute('data-disabled')).toEqual('true');
      expect(clicked).toEqual(false);

      var style = window.getComputedStyle(container);
      expect(style.cursor).toEqual('not-allowed');
      expect(style.opacity).not.toEqual('1');
    });
  });

  it('Toggle Checkbox', function () {
    // Create the tag
    var el = document.createElement('rui-checkbox');
    el.innerHTML = 'Test Checkbox';
    document.body.appendChild(el);

    // Mount the tag
    var tag = riot.mount('rui-checkbox')[0];
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);

    var inp = el.querySelector('input');
    var container = el.querySelector('span');

    // Off
    expect(container.getAttribute('data-checked')).toBeFalsy();
    expect(inp.getAttribute('value')).toEqual('false');

    container.click();

    // On
    expect(container.getAttribute('data-checked')).toEqual('true');
    expect(inp.getAttribute('value')).toEqual('true');

    container.click();

    // Off
    expect(container.getAttribute('data-checked')).toBeFalsy();
    expect(inp.getAttribute('value')).toEqual('false');
  });

  it('Small size', function () {
    // Create the tag
    var el = document.createElement('rui-checkbox');
    el.innerHTML = 'Test Checkbox';
    el.setAttribute('size', 'sm');
    document.body.appendChild(el);

    // Mount the tag
    var tag = riot.mount('rui-checkbox')[0];
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);

    // Wrapper div
    var style = window.getComputedStyle(el.querySelector('span'));
    expect(style.fontSize).toEqual('14px');
  });

  it('Large size', function () {
    // Create the tag
    var el = document.createElement('rui-checkbox');
    el.innerHTML = 'Test Checkbox';
    el.setAttribute('size', 'lg');
    document.body.appendChild(el);

    // Mount the tag
    var tag = riot.mount('rui-checkbox')[0];
    expect(tag).toBeDefined();
    expect(tag.isMounted).toBe(true);

    // Wrapper div
    var style = window.getComputedStyle(el.querySelector('span'));
    expect(style.fontSize).toEqual('20px');
  });

});
