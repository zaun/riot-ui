(function (riot) {
  'use strict';

  riot = 'default' in riot ? riot['default'] : riot;

  var domEvent = {
    /**
     * Trigger Event on DOM (root element of the tag)
     * @param { string } eventName - the name of the event. ex: 'change'
     */
    triggerDomEvent: function triggerDomEvent(eventName) {
      var _this = this;

      setTimeout(function () {
        var e;
        if (typeof Event == 'function') {
          // Standard browsers
          e = new Event(eventName);
        } else {
          // IE 9 ~ 11
          e = document.createEvent('Event');
          e.initEvent(eventName, true, true);
        }
        /** dispatch an event */
        _this.root.dispatchEvent(e);
      }, 0);
      return this; // return this for method chain
    }
  };

  /** Return all property names */
  function getAllPropertyNames(obj) {
    var arr = [];
    for (var key in obj) {
      arr.push(key);
    }return arr;
  }

  /** Call original method and update automatically */
  function hook(p, key) {
    var h = function h(e) {
      // update only when the argument is an Event object
      if (e && e instanceof Event) {
        // suppress updating on the inherit tag
        e.preventUpdate = true;
        // call original method
        p[key](e);
        // update automatically
        p.update();
      } else {
        p[key](e);
      }
    };
    h._inherited = true;
    return h;
  }

  var parentScope = {
    /**
     * Inject properties from parents
     */
    init: function init() {
      var _this = this;

      /** Store the keys originally belonging to the tag */
      this.one('update', function () {
        _this._ownPropKeys = getAllPropertyNames(_this);
        _this._ownOptsKeys = getAllPropertyNames(_this.opts);
      });
      /** Inherit the properties from parents on each update */
      this.on('update', function () {
        var ignoreProps = ['root', 'triggerDomEvent'];
        getAllPropertyNames(_this.parent)
        // TODO:
        //   Skipping 'triggerDomEvent' is a temporal workaround.
        //   In some cases function on the child would be overriden.
        //   This issue needs more study...
        .filter(function (key) {
          return ! ~_this._ownPropKeys.concat(ignoreProps).indexOf(key);
        }).forEach(function (key) {
          _this[key] = typeof _this.parent[key] != 'function' || _this.parent[key]._inherited ? _this.parent[key] : hook(_this.parent, key);
        });
        getAllPropertyNames(_this.parent.opts).filter(function (key) {
          return ! ~_this._ownOptsKeys.indexOf(key) && key != 'riotTag';
        }).forEach(function (key) {
          _this.opts[key] = typeof _this.parent.opts[key] != 'function' || _this.parent.opts[key]._inherited ? _this.parent.opts[key] : hook(_this.parent, key);
        });
      });
    }
  };

  riot.tag2('app-button', '<rui-header>Buttons</rui-header> <p>Use Riot-UI\'s custom button styles for actions in forms, dialogs, and more. Includes support for a handful of contextual variations, sizes, states, and more.</p> <rui-header level="2">Regular Buttons</rui-header> <p>Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p> <rui-panel> <rui-panel-container> <rui-button>Default</rui-button> <rui-button option="primary">Primary</rui-button> <rui-button option="secondary">Secondary</rui-button> <rui-button option="success">Success</rui-button> <rui-button option="info">Info</rui-button> <rui-button option="warning">Warning</rui-button> <rui-button option="danger">Danger</rui-button> <rui-button option="link">Link</rui-button> </rui-panel-container> <rui-panel-container> <rui-code lang="nohighlight"> &lt;rui-button option="primary"&gt;Primary&lt;/rui-button&gt;<br> &lt;rui-button option="secondary"&gt;Secondary&lt;/rui-button&gt;<br> &lt;rui-button option="success"&gt;Success&lt;/rui-button&gt;<br> &lt;rui-button option="info"&gt;Info&lt;/rui-button&gt;<br> &lt;rui-button option="warning"&gt;Warning&lt;/rui-button&gt;<br> &lt;rui-button option="danger"&gt;Danger&lt;/rui-button&gt;<br> &lt;rui-button option="link"&gt;Link&lt;/rui-button&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Outline Buttons</rui-header> <p>In need of a button, but not the hefty background colors they bring?</p> <rui-panel> <rui-panel-container> <rui-button option="primary-o">Primary</rui-button> <rui-button option="secondary-o">Secondary</rui-button> <rui-button option="success-o">Success</rui-button> <rui-button option="info-o">Info</rui-button> <rui-button option="warning-o">Warning</rui-button> <rui-button option="danger-o">Danger</rui-button> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-button option="primary-o"&gt;Primary&lt;/rui-button&gt;<br> &lt;rui-button option="secondary-o"&gt;Secondary&lt;/rui-button&gt;<br> &lt;rui-button option="success-o"&gt;Success&lt;/rui-button&gt;<br> &lt;rui-button option="info-o"&gt;Info&lt;/rui-button&gt;<br> &lt;rui-button option="warning-o"&gt;Warning&lt;/rui-button&gt;<br> &lt;rui-button option="danger-o"&gt;Danger&lt;/rui-button&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Toggle Buttons</rui-header> <p>Toggle the button between active and inactive states.</p> <rui-panel> <rui-panel-container> <rui-button toggle option="primary">Primary</rui-button> <rui-button toggle option="secondary">Secondary</rui-button> <rui-button toggle option="success">Success</rui-button> <rui-button toggle option="info">Info</rui-button> <rui-button toggle option="warning">Warning</rui-button> <rui-button toggle option="danger">Danger</rui-button> </rui-panel-container> <rui-panel-container> <rui-code lang="nohighlight"> &lt;rui-button toggle option="primary"&gt;Primary&lt;/rui-button&gt;<br> &lt;rui-button toggle option="secondary"&gt;Secondary&lt;/rui-button&gt;<br> &lt;rui-button toggle option="success"&gt;Success&lt;/rui-button&gt;<br> &lt;rui-button toggle option="info"&gt;Info&lt;/rui-button&gt;<br> &lt;rui-button toggle option="warning"&gt;Warning&lt;/rui-button&gt;<br> &lt;rui-button toggle option="danger"&gt;Danger&lt;/rui-button&gt;<br> </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Sizes</rui-header> <p>Fancy larger or smaller buttons?</p> <rui-panel> <rui-panel-container> <rui-button size="sm" option="primary">Primary</rui-button> <rui-button size="sm" option="secondary">Secondary</rui-button> <rui-button size="sm" option="success">Success</rui-button> </rui-panel-container> <rui-panel-container> <rui-button size="lg" option="primary">Primary</rui-button> <rui-button size="lg" option="secondary">Secondary</rui-button> <rui-button size="lg" option="success">Success</rui-button> </rui-panel-container> <rui-panel-container> <rui-button block option="primary">Primary</rui-button><br> <rui-button block="block" option="secondary">Secondary</rui-button><br> <rui-button block="{true}" option="success">Success</rui-button> </rui-panel-container> <rui-panel-container> <rui-code> &lt;p&gt;<br> &nbsp;&nbsp;&lt;rui-button size="sm" option="primary"&gt;Primary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button size="sm" option="secondary"&gt;Secondary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button size="sm" option="success"&gt;Success&lt;/rui-button&gt;<br> &lt;/p&gt;<br> &lt;p&gt;<br> &nbsp;&nbsp;&lt;rui-button size="lg" option="primary"&gt;Primary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button size="lg" option="secondary"&gt;Secondary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button size="lg" option="success"&gt;Success&lt;/rui-button&gt;<br> &lt;/p&gt;<br> &lt;p&gt;<br> &nbsp;&nbsp;&lt;rui-button block option="primary"&gt;Primary&lt;/rui-button&gt;&lt;br /&gt;<br> &nbsp;&nbsp;&lt;rui-button block="block" option="secondary"&gt;Secondary&lt;/rui-button&gt;&lt;br /&gt;<br> &nbsp;&nbsp;&lt;rui-button block="\\{ true }" option="success"&gt;Success&lt;/rui-button&gt;<br> &lt;/p&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Active State</rui-header> <p>Buttons will appear pressed.</p> <rui-panel> <rui-panel-container> <rui-button active option="primary">Primary</rui-button> <rui-button active="active" option="secondary">Secondary</rui-button> <rui-button active="{true}" option="success">Success</rui-button> </rui-panel-container> <rui-panel-container> <rui-button active option="primary-o">Primary</rui-button> <rui-button active="active" option="secondary-o">Secondary</rui-button> <rui-button active="{true}" option="success-o">Success</rui-button> </rui-panel-container> <rui-panel-container> <rui-code> &lt;p&gt;<br> &nbsp;&nbsp;&lt;rui-button active option="primary"&gt;Primary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button active="active" option="secondary"&gt;Secondary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button active="\\{ true }" option="success"&gt;Success&lt;/rui-button&gt;<br> &lt;/p&gt;<br> &lt;p&gt;<br> &nbsp;&nbsp;&lt;rui-button active option="primary-o"&gt;Primary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button active="active" option="secondary-o"&gt;Secondary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button active="\\{ true }" option="success-o"&gt;Success&lt;/rui-button&gt;<br> &lt;/p&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Disabled State</rui-header> <p>Make buttons look inactive and prevent actions.</p> <rui-panel> <rui-panel-container> <rui-button disabled option="primary">Primary</rui-button> <rui-button disabled="disabled" option="secondary">Secondary</rui-button> <rui-button __disabled="{true}" option="success">Success</rui-button> </rui-panel-container> <rui-panel-container> <rui-button disabled option="primary-o">Primary</rui-button> <rui-button disabled="disabled" option="secondary-o">Secondary</rui-button> <rui-button __disabled="{true}" option="success-o">Success</rui-button> </rui-panel-container> <rui-panel-container> <rui-code> &lt;p&gt;<br> &nbsp;&nbsp;&lt;rui-button disabled option="primary"&gt;Primary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button disabled="disabled" option="secondary"&gt;Secondary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button disabled="\\{ true }" option="success"&gt;Success&lt;/rui-button&gt;<br> &lt;/p&gt;<br> &lt;p&gt;<br> &nbsp;&nbsp;&lt;rui-button disabled option="primary-o"&gt;Primary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button disabled="disabled" option="secondary-o"&gt;Secondary&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button disabled="\\{ true }" option="success-o"&gt;Success&lt;/rui-button&gt;<br> &lt;/p&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Simple Example</rui-header> <p>Example button listening to the click event.</p> <rui-panel> <rui-panel-container> <rui-button option="primary" onclick="{addOne}">Add</rui-button> <rui-button option="danger" onclick="{subtractOne}">Subtract</rui-button> </rui-panel-container> <rui-panel-container> <strong>Value: </strong> {exampleValue} </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-panel&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-button option="primary" onclick=\\{ addOne }&gt;Add&lt;/rui-button&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-button option="danger" onclick=\\{ subtractOne }&gt;Subtract&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;/rui-panel-container&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;strong&gt;Value: &lt;/strong&gt; \\{ exampleValue }<br> &nbsp;&nbsp;&lt;/rui-panel-container&gt;<br> &lt;/rui-panel&gt; <br> &lt;script&gt;<br> &nbsp;&nbsp;var self = this;<br> &nbsp;&nbsp;self.exampleValue = 0;<br> <br> &nbsp;&nbsp;self.addOne = function () {<br /> &nbsp;&nbsp;&nbsp;&nbsp;self.exampleValue += 1;<br /> &nbsp;&nbsp;}<br> <br> &nbsp;&nbsp;self.subtractOne = function () {<br /> &nbsp;&nbsp;&nbsp;&nbsp;self.exampleValue -= 1;<br /> &nbsp;&nbsp;}<br> &lt;/script&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header>Button Groups</rui-header> <p>Group a series of buttons together on a single line with the button group.</p> <rui-panel> <rui-panel-container> <rui-group> <rui-button option="primary">First</rui-button> <rui-button option="primary">Second</rui-button> <rui-button option="primary">Third</rui-button> <rui-button option="primary">Fourth</rui-button> </rui-group> <rui-group> <rui-button option="secondary">First</rui-button> <rui-button option="secondary">Second</rui-button> <rui-button option="secondary">Third</rui-button> <rui-button option="secondary">Fourth</rui-button> </rui-group> <rui-group> <rui-button option="success">First</rui-button> <rui-button option="success">Second</rui-button> <rui-button option="success">Third</rui-button> <rui-button option="success">Fourth</rui-button> </rui-group> <rui-group> <rui-button option="info">First</rui-button> <rui-button option="info">Second</rui-button> <rui-button option="info">Third</rui-button> <rui-button option="info">Fourth</rui-button> </rui-group> <rui-group> <rui-button option="warning">First</rui-button> <rui-button option="warning">Second</rui-button> <rui-button option="warning">Third</rui-button> <rui-button option="warning">Fourth</rui-button> </rui-group> <rui-group> <rui-button option="danger">First</rui-button> <rui-button option="danger">Second</rui-button> <rui-button option="danger">Third</rui-button> <rui-button option="danger">Fourth</rui-button> </rui-group> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-group&gt;<br> &nbsp;&nbsp;&lt;rui-button option="primary"&gt;First&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button option="primary"&gt;Second&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button option="primary"&gt;Third&lt;/rui-button&gt;<br> &nbsp;&nbsp;&lt;rui-button option="primary"&gt;Forth&lt;/rui-button&gt;<br> &lt;/rui-group&gt; </rui-code> </rui-panel-container> </rui-panel>', '', '', function(opts) {
      var self = this;
      self.mixin(parentScope).mixin(domEvent);

      self.exampleValue = 0;

      self.addOne = function () {
        self.exampleValue += 1;
      }

      self.subtractOne = function () {
        self.exampleValue -= 1;
      }
  });

  riot.tag2('app-checkbox', '<rui-header>Checkboxes</rui-header> <p></p> <rui-header level="2">Regular Checkbox</rui-header> <p></p> <rui-panel> <rui-panel-container> <rui-checkbox>Default Checkbox</rui-checkbox> <rui-checkbox option="primary">Primary Checkbox</rui-checkbox> <rui-checkbox option="secondary">Secondary Checkbox</rui-checkbox> <rui-checkbox option="success">Success Checkbox</rui-checkbox> <rui-checkbox option="info">Info Checkbox</rui-checkbox> <rui-checkbox option="warning">Warning Checkbox</rui-checkbox> <rui-checkbox option="danger">Danger Checkbox</rui-checkbox> </rui-panel-container> <rui-panel-container> <rui-code> </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Sizes</rui-header> <p></p> <rui-panel> <rui-panel-container> <rui-checkbox size="sm">Small Checkbox</rui-checkbox> </rui-panel-container> <rui-panel-container> <rui-checkbox size="lg">Large Checkbox</rui-checkbox> </rui-panel-container> <rui-panel-container> <rui-code> </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Disabled Checkbox</rui-header> <p></p> <rui-panel> <rui-panel-container> <rui-checkbox disabled>Default Checkbox</rui-checkbox> <rui-checkbox disabled="disabled" option="primary">Primary Checkbox</rui-checkbox> <rui-checkbox __disabled="{true}" option="secondary">Secondary Checkbox</rui-checkbox> </rui-panel-container> <rui-panel-container> <rui-code> </rui-code> </rui-panel-container> </rui-panel>', '', '', function(opts) {
      this.mixin(parentScope).mixin(domEvent);
  });

  riot.tag2('app-content', '<rui-header>Panels</rui-header> <p>The <code>rui-panel</code> and <code>rui-panel-container</code> tags can be used to organize and call out information.</p> <rui-panel> <rui-panel-container> <rui-panel> <rui-panel-container>Default</rui-panel-container> </rui-panel> <rui-panel> <rui-panel-container>First Container</rui-panel-container> <rui-panel-container>Second Container</rui-panel-container> <rui-panel-container>Third Container</rui-panel-container> </rui-panel> <rui-panel option="primary"> <rui-panel-container>Primary</rui-panel-container> </rui-panel> <rui-panel option="secondary"> <rui-panel-container>Secondary</rui-panel-container> </rui-panel> <rui-panel option="success"> <rui-panel-container>Success</rui-panel-container> </rui-panel> <rui-panel option="info"> <rui-panel-container>Info</rui-panel-container> </rui-panel> <rui-panel option="warning"> <rui-panel-container>Warning</rui-panel-container> </rui-panel> <rui-panel option="danger"> <rui-panel-container>Danger</rui-panel-container> </rui-panel> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-panel&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;Default&lt;/rui-panel-container&gt;<br> &lt;/rui-panel&gt;<br> <br> &lt;rui-panel&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;First Container&lt;/rui-panel-container&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;Second Container&lt;/rui-panel-container&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;Third Container&lt;/rui-panel-container&gt;<br> &lt;/rui-panel&gt;<br> <br> &lt;rui-panel option="primary"&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;Primary&lt;/rui-panel-container&gt;<br> &lt;/rui-panel&gt;<br> <br> &lt;rui-panel option="secondary"&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;Secondary&lt;/rui-panel-container&gt;<br> &lt;/rui-panel&gt;<br> <br> &lt;rui-panel option="success"&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;Success&lt;/rui-panel-container&gt;<br> &lt;/rui-panel&gt;<br> <br> &lt;rui-panel option="info"&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;Info&lt;/rui-panel-container&gt;<br> &lt;/rui-panel&gt;<br> <br> &lt;rui-panel option="warning"&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;Warning&lt;/rui-panel-container&gt;<br> &lt;/rui-panel&gt;<br> <br> &lt;rui-panel option="danger"&gt;<br> &nbsp;&nbsp;&lt;rui-panel-container&gt;Danger&lt;/rui-panel-container&gt;<br> &lt;/rui-panel&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header>Headers</rui-header> <p>The <code>rui-header</code> is an advanced header replacement for <code>h1</code> style tags. It also works with <code>rui-toc</code> to generate a table of contents.</p> <rui-panel> <rui-panel-container> <rui-header no-toc>Level 1</rui-header> <rui-header level="2" no-toc>Level 2</rui-header> <rui-header level="3" no-toc>Level 3</rui-header> <rui-header level="4" no-toc>Level 4</rui-header> <rui-header level="5" no-toc>Level 5</rui-header> <rui-header level="6" no-toc>Level 6</rui-header> </rui-panel-container> <rui-panel-container> <rui-code> </rui-code> </rui-panel-container> </rui-panel> <rui-header>Badges</rui-header> <p>The <code>rui-badge</code> is a simple count indicator that can be added to other controls.</p> <rui-panel> <rui-panel-container> <rui-badge>9</rui-badge> <rui-badge>99</rui-badge> <rui-badge>999</rui-badge> <rui-badge>9999</rui-badge> </rui-panel-container> <rui-panel-container> <rui-button> Test <rui-badge>9</rui-badge> </rui-button> <rui-button> Test <rui-badge>99</rui-badge> </rui-button> </rui-panel-container> <rui-panel-container> <rui-code> </rui-code> </rui-panel-container> </rui-panel> <rui-header>Video</rui-header> <p>The <code>rui-video</code> is a quick way to embed video from popular hosting services such as YouTube.</p> <rui-panel> <rui-panel-container> <rui-video youtube-id="xCoxGV7j71c"></rui-video> </rui-panel-container> <rui-panel-container> <rui-video vimeo-id="162348702"></rui-video> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-video youtube-id="xCoxGV7j71c"&gt;&lt;/rui-video&gt;<br> &lt;rui-video vimeo-id="162348702"&gt;&lt;/rui-video&gt; </rui-code> </rui-panel-container> </rui-panel>', '', '', function(opts) {
      this.mixin(parentScope).mixin(domEvent);
  });

  riot.tag2('app-grid', '<rui-header>How it works</rui-header> <p>At a high level, here’s how the grid system works:</p> <ul> <li>There are three major components: <code>rui-container</code>, <code>rui-row</code>, and <code>rui-col</code>.</li> <li>Containers center your site’s contents and help align your grid content.</li> <li>Rows are horizontal groups of columns that ensure your columns are lined up properly.</li> <li>Content should be placed within columns, and only columns may be immediate children of rows.</li> <li>Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.</li> <li>Columns have horizontal padding to create the gutters between individual columns.</li> <li>There are five grid tiers: extra small, small, medium, large, and extra large.</li> <li>Grid tiers are based on minimum widths, meaning they apply to that one tier and all those above it.</li> </ul> <rui-header level="2">Quick start example</rui-header> <rui-panel> <rui-panel-container> <rui-container> <rui-row> <rui-col sm="33">One of Three columns</rui-col> <rui-col sm="33">Two of Three columns</rui-col> <rui-col sm="34">Three of Three columns</rui-col> </rui-row> <rui-row> <rui-col sm="66">One of Two columns</rui-col> <rui-col sm="34">Two of Two columns</rui-col> </rui-row> <rui-row> <rui-col sm="33">One of Two columns</rui-col> <rui-col sm="67">Two of Two columns</rui-col> </rui-row> </rui-container> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-container&gt;<br> &nbsp;&nbsp;&lt;rui-row&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="33"&gt;One of three columns&lt;/rui-col&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="33"&gt;Two of three columns&lt;/rui-col&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="34"&gt;Trhee of three columns&lt;/rui-col&gt;<br> &nbsp;&nbsp;&lt;/rui-row&gt;<br> &nbsp;&nbsp;&lt;rui-row&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="66"&gt;One of Two columns&lt;/rui-col&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="34"&gt;Two of Two columns&lt;/rui-col&gt;<br> &nbsp;&nbsp;&lt;/rui-row&gt;<br> &nbsp;&nbsp;&lt;rui-row&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="33"&gt;One of Two columns&lt;/rui-col&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="67"&gt;Two of Two columns&lt;/rui-col&gt;<br> &nbsp;&nbsp;&lt;/rui-row&gt;<br> &lt;/rui-container&gt; </rui-code> </rui-panel-container> </rui-panel> <p>The above example creates three equal-width columns on small, medium, large, and extra large devices. This example also has added padding and boarders to the rui-col elements to make it clear where the columns are.</p>', 'app-grid rui-col,[riot-tag="app-grid"] rui-col,[data-is="app-grid"] rui-col{ padding: 1em; border: 1px dashed #ccc; }', '', function(opts) {
      this.mixin(parentScope).mixin(domEvent);
  });

  riot.tag2('app-icons', '<rui-header>Emoji</rui-header> <p>The emoji tag is about 36kb in size and is used to create all the icons shown below. The icons are directly sized by the <code>font-size</code> of its container.</p> <rui-panel> <rui-panel-container class="icons"> <rui-emoji name="grinning"></rui-emoji> <rui-emoji name="grimacing"></rui-emoji> <rui-emoji name="grin"></rui-emoji> <rui-emoji name="joy"></rui-emoji> <rui-emoji name="smiley"></rui-emoji> <rui-emoji name="smile"></rui-emoji> <rui-emoji name="sweat_smile"></rui-emoji> <rui-emoji name="laughing"></rui-emoji> <rui-emoji name="innocent"></rui-emoji> <rui-emoji name="wink"></rui-emoji> <rui-emoji name="blush"></rui-emoji> <rui-emoji name="slight_smile"></rui-emoji> <rui-emoji name="upside_down"></rui-emoji> <rui-emoji name="relaxed"></rui-emoji> <rui-emoji name="yum"></rui-emoji> <rui-emoji name="relieved"></rui-emoji> <rui-emoji name="heart_eyes"></rui-emoji> <rui-emoji name="kissing_heart"></rui-emoji> <rui-emoji name="kissing"></rui-emoji> <rui-emoji name="kissing_smiling_eyes"></rui-emoji> <rui-emoji name="kissing_closed_eyes"></rui-emoji> <rui-emoji name="stuck_out_tongue_winking_eye"></rui-emoji> <rui-emoji name="stuck_out_tongue_closed_eyes"></rui-emoji> <rui-emoji name="stuck_out_tongue"></rui-emoji> <rui-emoji name="money_mouth"></rui-emoji> <rui-emoji name="nerd"></rui-emoji> <rui-emoji name="sunglasses"></rui-emoji> <rui-emoji name="hugging"></rui-emoji> <rui-emoji name="smirk"></rui-emoji> <rui-emoji name="no_mouth"></rui-emoji> <rui-emoji name="neutral_face"></rui-emoji> <rui-emoji name="expressionless"></rui-emoji> <rui-emoji name="unamused"></rui-emoji> <rui-emoji name="rolling_eyes"></rui-emoji> <rui-emoji name="thinking"></rui-emoji> <rui-emoji name="flushed"></rui-emoji> <rui-emoji name="disappointed"></rui-emoji> <rui-emoji name="worried"></rui-emoji> <rui-emoji name="angry"></rui-emoji> <rui-emoji name="rage"></rui-emoji> <rui-emoji name="pensive"></rui-emoji> <rui-emoji name="confused"></rui-emoji> <rui-emoji name="slight_frown"></rui-emoji> <rui-emoji name="frowning2"></rui-emoji> <rui-emoji name="persevere"></rui-emoji> <rui-emoji name="confounded"></rui-emoji> <rui-emoji name="tired_face"></rui-emoji> <rui-emoji name="weary"></rui-emoji> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-emoji name="grinning" /&gt; </rui-code> </rui-panel-container> </rui-panel>', '', '', function(opts) {
      this.mixin(parentScope).mixin(domEvent);
  });

  riot.tag2('app-input', '<rui-header>Inputs</rui-header> <p></p> <rui-header level="2">Quick start example</rui-header> <p></p> <rui-panel> <rui-panel-container> <rui-input></rui-input> <rui-input placeholder="Example Input"></rui-input> <rui-input disabled placeholder="Disabled Input"></rui-input> <rui-input value="Default Value"></rui-input> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-input /&gt;<br> &lt;rui-input placeholder="Example Input"/&gt;<br> &lt;rui-input disabled placeholder="Disabled Input"/&gt;<br> &lt;rui-input value="Default Value"/&gt;<br> </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Sizes</rui-header> <p>Fancy larger or smaller inputs?</p> <rui-panel> <rui-panel-container> <rui-input size="lg" placeholder="Large Input"></rui-input> <rui-input size="sm" placeholder="Small Input"></rui-input> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-input size="lg" placeholder="Large Input"/&gt;<br> &lt;rui-input size="sm" placeholder="Small Input"/&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Types</rui-header> <p>Limit the type of input</p> <rui-panel> <rui-panel-container> <rui-input type="text" placeholder="Text (default)"></rui-input> <rui-input type="decimal" placeholder="Decimal"></rui-input> <rui-input type="integer" placeholder="Integer"></rui-input> <rui-input type="hex" placeholder="Hex"></rui-input> <rui-input type="alpha" placeholder="Alpha"></rui-input> <rui-input type="alphanumeric" placeholder="Alphanumeric"></rui-input> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-input type="text" placeholder="Text (default)"/&gt;<br> &lt;rui-input type="decimal" placeholder="Decimal"/&gt;<br> &lt;rui-input type="integer" placeholder="Integer"/&gt;<br> &lt;rui-input type="hex" placeholder="Hex"/&gt;<br> &lt;rui-input type="alpha" placeholder="Aplha"/&gt;<br> &lt;rui-input type="alphanumeric" placeholder="Alphanumeric"/&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-panel option="warning"> <ul> <li>Add functionality similar to <a href="http://firstopinion.github.io/formatter.js/">formatter.js</a> to the control.</li> </ul> </rui-panel> <rui-header>Input Groups</rui-header> <p></p> <rui-panel> <rui-panel-container> <rui-group> <rui-input placeholder="Recipient\'s username"></rui-input> <rui-addon>@example.com</rui-addon> </rui-group> <rui-group> <rui-addon>@</rui-addon> <rui-input placeholder="Username"></rui-input> </rui-group> <rui-group> <rui-addon>$</rui-addon> <rui-input></rui-input> <rui-addon>.00</rui-addon> </rui-group> <rui-group> <rui-input placeholder="Search..."></rui-input> <rui-button>GO</rui-button> </rui-group> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-group&gt;<br> &lt;rui-input placeholder="Recipient\'s username"/&gt;<br> &lt;rui-addon&gt;@example.com&lt;/rui-addon&gt;<br> &lt;/rui-group&gt;<br> &lt;rui-group&gt;<br> &lt;rui-addon&gt;@&lt;/rui-addon&gt;<br> &lt;rui-input placeholder="Username"/&gt;<br> &lt;/rui-group&gt;<br> &lt;rui-group&gt;<br> &lt;rui-addon&gt;$&lt;/rui-addon&gt;<br> &lt;rui-input /&gt;<br> &lt;rui-addon&gt;.00&lt;/rui-addon&gt;<br> &lt;/rui-group&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Input Examples</rui-header> <p>Several simple examples of functionality</p> <rui-panel> <rui-panel-container> <rui-group> <rui-input id="searchInput" placeholder="Search..."></rui-input> <rui-button onclick="{doSearch}">GO</rui-button> </rui-group> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-group&gt;<br> &lt;rui-input id="searchInput" placeholder="Search..." /&gt;<br> &lt;rui-button option="secondary" onclick="\\{ doSearch }"&gt;GO&lt;/rui-button&gt;<br> &lt;/rui-group&gt;<br> &lt;script&gt;<br> this.doSearch = function () {<br />   var el = document.getElementById(\'searchInput\');<br />     alert(\'Search for: \' + el.value);<br />     el.clear();<br />     self.update();<br />};<br> &lt;/script&gt; </rui-code> </rui-panel-container> </rui-panel>', '', '', function(opts) {
      var self = this;
      self.mixin(parentScope).mixin(domEvent);

      self.doSearch = function () {
        var el = document.getElementById('searchInput');
        alert('Search for: ' + el.value);
        el.clear();
        self.update();
      };
  });

  riot.tag2('app-nav', '<rui-header>Navigation bar</rui-header> <p>The <code>rui-nav</code> is a simple bar designed to stay at the top of its containing element.</p> <rui-header level="2">Quick start example</rui-header> <rui-panel> <rui-panel-container> <rui-nav> <rui-container> <rui-nav-item type="brand">Brand</rui-nav-item> <rui-nav-item>Text</rui-nav-item> <rui-nav-item href="#">Link</rui-nav-item> <rui-nav-item onclick="alert(\'Menu Clicked\')">Javascript</rui-nav-item> <rui-nav-item active>Active</rui-nav-item> <rui-nav-item align="right">Right</rui-nav-item> </rui-container> </rui-nav> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-nav&gt;<br> &nbsp;&nbsp;&lt;rui-container&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-nav-item type="brand"&gt;Brand&lt;/rui-nav-item&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-nav-item&gt;Text&lt;/rui-nav-item&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-nav-item href="#"&gt;Link&lt;/rui-nav-item&gt;<br> &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-nav-item align="right"&gt;Right&lt;/rui-nav-item&gt;<br> &nbsp;&nbsp;&lt;/rui-container&gt;<br> &lt;/rui-nav&gt; </rui-code> </rui-panel-container> </rui-panel> <p>The <code>rui-nav</code> control works inside the <code>body</code>, <code>rui-container</code> and <code>rui-panel</code> tags. Additionally when used in the <code>body</code> tag adding a <code>fixed</code> attribute will keep the navigation bar pinned to the top of the screen whole scrolling.</p> <rui-header>Table of Contents</rui-header> <p>The <code>rui-toc</code> automatic table of contents based on the <code>rui-header</code> tags on the page.</p>', '', '', function(opts) {
      this.mixin(parentScope).mixin(domEvent);
  });

  riot.tag2('app-toggle', '<rui-header>Toggle</rui-header> <p></p> <rui-header level="2">Regular Toggles</rui-header> <p></p> <rui-panel> <rui-panel-container> <rui-toggle option="primary"></rui-toggle> <rui-toggle option="secondary" left="Fast" right="Slow"></rui-toggle> <rui-toggle option="success" knob="TV"></rui-toggle> <rui-toggle option="info" left="Up" right="Down"></rui-toggle> <rui-toggle option="warning" left="Inner" knob="Space" right="Outter"></rui-toggle> <rui-toggle option="danger" left="Dog" right="Cat"></rui-toggle> </rui-panel-container> <rui-panel-container> <rui-code> &lt;rui-toggle option="primary" /&gt;<br> &lt;rui-toggle option="secondary" left="Fast" right="Slow" /&gt;<br> &lt;rui-toggle option="success" knob="TV" /&gt;<br> &lt;rui-toggle option="info" left="Up" right="Down" /&gt;<br> &lt;rui-toggle option="warning" left="Inner" knob="Space" right="Outter" /&gt;<br> &lt;rui-toggle option="danger" left="Dog" right="Cat" /&gt; </rui-code> </rui-panel-container> </rui-panel> <rui-header level="2">Disabled State</rui-header> <p></p> <rui-panel> <rui-panel-container> <rui-toggle disabled option="primary"></rui-toggle> <rui-toggle disabled="disabled" option="secondary" left="Fast" right="Slow"></rui-toggle> <rui-toggle __disabled="{true}" option="success" knob="TV"></rui-toggle> </rui-panel-container> <rui-panel-container> <rui-code> </rui-code> </rui-panel-container> </rui-panel>', '', '', function(opts) {
      this.mixin(parentScope).mixin(domEvent);
  });

  riot.tag2('app', '<rui-nav fixed> <rui-container> <rui-nav-item type="brand">Riot-UI</rui-nav-item> <rui-nav-item href="#/navigation" active="{view == \'navigation\'}">Navigation</rui-nav-item> <rui-nav-item href="#/grid" active="{view == \'grid\'}">Grid System</rui-nav-item> <rui-nav-item href="#/inputs" active="{view == \'inputs\'}">Input Controls</rui-nav-item> <rui-nav-item href="#/content" active="{view == \'content\'}">Content Controls</rui-nav-item> <rui-nav-item href="#/icons" active="{view == \'icons\'}">Icons</rui-nav-item> <rui-nav-item align="right" href="https://github.com/zaun/riot-ui">Github</rui-nav-item> </rui-container> </rui-nav> <rui-container> <rui-row> <rui-col sm="100"> <rui-container class="callout" show="{view == \'navigation\'}"> <h1>Navigation</h1> <p>The nav is a simple wrapper for positioning branding, navigation, and other elements into a concise navigation header.</p> </rui-container> <rui-container class="callout" show="{view == \'grid\'}"> <h1>Grid System</h1> <p>Riot-UI includes a powerful mobile-first grid system for building layouts of all shapes and sizes. It’s based on column layout and has multiple tiers, one for each media query range.</p> </rui-container> <rui-container class="callout" show="{view == \'inputs\'}"> <h1>Input Controls</h1> <p>Want the user to interact with your webpage?</p> </rui-container> <rui-container class="callout" show="{view == \'content\'}"> <h1>Content Controls</h1> <p>Want to display information to your users?</p> </rui-container> <rui-container class="callout" show="{view == \'icons\'}"> <h1>Icons</h1> <p>Riot-UI includes several tags to place icons inline.</p> </rui-container> </rui-col> </rui-row> <rui-row> <rui-col md="25" md-hidden> <rui-toc></rui-toc> </rui-col> <rui-col md="75" xs="100"> <app-nav if="{view == \'navigation\'}"></app-nav> <app-grid if="{view == \'grid\'}"></app-grid> <app-button if="{view == \'inputs\'}"></app-button> <app-input if="{view == \'inputs\'}"></app-input> <app-toggle if="{view == \'inputs\'}"></app-toggle> <app-content if="{view == \'content\'}"></app-content> <app-checkbox if="{view == \'inputs\'}"></app-checkbox> <app-icons if="{view == \'icons\'}"></app-icons> </rui-col> </rui-row> <rui-container>', '', '', function(opts) {
      if (!String.prototype.toProperCase) {
        String.prototype.toProperCase = function () {
          return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        };
      }
      var self = this;

      self.view = '';

      riot.route(function(collection) {
        if (collection) {
          self.view = collection.toLowerCase();
          self.update();
        } else {
          location.href = '#/navigation'
        }
      });
      riot.route.start(true);
  });

  riot.mount('app');

}(riot));