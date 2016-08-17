import { domEvent, parentScope } from 'riot-mixin-pack'

<app-button>
  <rui-header>Buttons</rui-header>
  <p>Use Riot-UI's custom button styles for actions in forms, dialogs, and
  more. Includes support for a handful of contextual variations, sizes, states,
  and more.</p>

  <rui-header level="2">Regular Buttons</rui-header>
  <p>Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>
  <rui-panel>
    <rui-panel-container>
      <rui-button>Default</rui-button>
      <rui-button option="primary">Primary</rui-button>
      <rui-button option="secondary">Secondary</rui-button>
      <rui-button option="success">Success</rui-button>
      <rui-button option="info">Info</rui-button>
      <rui-button option="warning">Warning</rui-button>
      <rui-button option="danger">Danger</rui-button>
      <rui-button option="link">Link</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code lang="nohighlight">
&lt;rui-button option="primary"&gt;Primary&lt;/rui-button&gt;<br />
&lt;rui-button option="secondary"&gt;Secondary&lt;/rui-button&gt;<br />
&lt;rui-button option="success"&gt;Success&lt;/rui-button&gt;<br />
&lt;rui-button option="info"&gt;Info&lt;/rui-button&gt;<br />
&lt;rui-button option="warning"&gt;Warning&lt;/rui-button&gt;<br />
&lt;rui-button option="danger"&gt;Danger&lt;/rui-button&gt;<br />
&lt;rui-button option="link"&gt;Link&lt;/rui-button&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Outline Buttons</rui-header>
  <p>In need of a button, but not the hefty background colors they bring?</p>
  <rui-panel>
    <rui-panel-container>
      <rui-button option="primary-o">Primary</rui-button>
      <rui-button option="secondary-o">Secondary</rui-button>
      <rui-button option="success-o">Success</rui-button>
      <rui-button option="info-o">Info</rui-button>
      <rui-button option="warning-o">Warning</rui-button>
      <rui-button option="danger-o">Danger</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-button option="primary-o"&gt;Primary&lt;/rui-button&gt;<br />
        &lt;rui-button option="secondary-o"&gt;Secondary&lt;/rui-button&gt;<br />
        &lt;rui-button option="success-o"&gt;Success&lt;/rui-button&gt;<br />
        &lt;rui-button option="info-o"&gt;Info&lt;/rui-button&gt;<br />
        &lt;rui-button option="warning-o"&gt;Warning&lt;/rui-button&gt;<br />
        &lt;rui-button option="danger-o"&gt;Danger&lt;/rui-button&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Toggle Buttons</rui-header>
  <p>Toggle the button between active and inactive states.</p>
  <rui-panel>
    <rui-panel-container>
      <rui-button toggle option="primary">Primary</rui-button>
      <rui-button toggle option="secondary">Secondary</rui-button>
      <rui-button toggle option="success">Success</rui-button>
      <rui-button toggle option="info">Info</rui-button>
      <rui-button toggle option="warning">Warning</rui-button>
      <rui-button toggle option="danger">Danger</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code lang="nohighlight">
&lt;rui-button toggle option="primary"&gt;Primary&lt;/rui-button&gt;<br />
&lt;rui-button toggle option="secondary"&gt;Secondary&lt;/rui-button&gt;<br />
&lt;rui-button toggle option="success"&gt;Success&lt;/rui-button&gt;<br />
&lt;rui-button toggle option="info"&gt;Info&lt;/rui-button&gt;<br />
&lt;rui-button toggle option="warning"&gt;Warning&lt;/rui-button&gt;<br />
&lt;rui-button toggle option="danger"&gt;Danger&lt;/rui-button&gt;<br />
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Sizes</rui-header>
  <p>Fancy larger or smaller buttons?</p>
  <rui-panel>
    <rui-panel-container>
      <rui-button size="sm" option="primary">Primary</rui-button>
      <rui-button size="sm" option="secondary">Secondary</rui-button>
      <rui-button size="sm" option="success">Success</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-button size="lg" option="primary">Primary</rui-button>
      <rui-button size="lg" option="secondary">Secondary</rui-button>
      <rui-button size="lg" option="success">Success</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-button block option="primary">Primary</rui-button><br />
      <rui-button block="block" option="secondary">Secondary</rui-button><br />
      <rui-button block="{ true }" option="success">Success</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;p&gt;<br />
        &nbsp;&nbsp;&lt;rui-button size="sm" option="primary"&gt;Primary&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button size="sm" option="secondary"&gt;Secondary&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button size="sm" option="success"&gt;Success&lt;/rui-button&gt;<br />
        &lt;/p&gt;<br />
        &lt;p&gt;<br />
        &nbsp;&nbsp;&lt;rui-button size="lg" option="primary"&gt;Primary&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button size="lg" option="secondary"&gt;Secondary&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button size="lg" option="success"&gt;Success&lt;/rui-button&gt;<br />
        &lt;/p&gt;<br />
        &lt;p&gt;<br />
        &nbsp;&nbsp;&lt;rui-button block option="primary"&gt;Primary&lt;/rui-button&gt;&lt;br /&gt;<br />
        &nbsp;&nbsp;&lt;rui-button block="block" option="secondary"&gt;Secondary&lt;/rui-button&gt;&lt;br /&gt;<br />
        &nbsp;&nbsp;&lt;rui-button block="\{ true }" option="success"&gt;Success&lt;/rui-button&gt;<br />
        &lt;/p&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Active State</rui-header>
  <p>Buttons will appear pressed.</p>
  <rui-panel>
    <rui-panel-container>
      <rui-button active option="primary">Primary</rui-button>
      <rui-button active="active" option="secondary">Secondary</rui-button>
      <rui-button active="{ true }" option="success">Success</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-button active option="primary-o">Primary</rui-button>
      <rui-button active="active" option="secondary-o">Secondary</rui-button>
      <rui-button active="{ true }" option="success-o">Success</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;p&gt;<br />
        &nbsp;&nbsp;&lt;rui-button active option="primary"&gt;Primary&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button active="active" option="secondary"&gt;Secondary&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button active="\{ true }" option="success"&gt;Success&lt;/rui-button&gt;<br />
        &lt;/p&gt;<br />
        &lt;p&gt;<br />
        &nbsp;&nbsp;&lt;rui-button active option="primary-o"&gt;Primary&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button active="active" option="secondary-o"&gt;Secondary&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button active="\{ true }" option="success-o"&gt;Success&lt;/rui-button&gt;<br />
        &lt;/p&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Disabled State</rui-header>
  <p>Make buttons look inactive and prevent actions.</p>
  <rui-panel>
    <rui-panel-container>
      <rui-button disabled option="primary">Primary</rui-button>
      <rui-button disabled="disabled" option="secondary">Secondary</rui-button>
      <rui-button disabled="{ true }" option="success">Success</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-button disabled option="primary-o">Primary</rui-button>
      <rui-button disabled="disabled" option="secondary-o">Secondary</rui-button>
      <rui-button disabled="{ true }" option="success-o">Success</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
      &lt;p&gt;<br />
      &nbsp;&nbsp;&lt;rui-button disabled option="primary"&gt;Primary&lt;/rui-button&gt;<br />
      &nbsp;&nbsp;&lt;rui-button disabled="disabled" option="secondary"&gt;Secondary&lt;/rui-button&gt;<br />
      &nbsp;&nbsp;&lt;rui-button disabled="\{ true }" option="success"&gt;Success&lt;/rui-button&gt;<br />
      &lt;/p&gt;<br />
      &lt;p&gt;<br />
      &nbsp;&nbsp;&lt;rui-button disabled option="primary-o"&gt;Primary&lt;/rui-button&gt;<br />
      &nbsp;&nbsp;&lt;rui-button disabled="disabled" option="secondary-o"&gt;Secondary&lt;/rui-button&gt;<br />
      &nbsp;&nbsp;&lt;rui-button disabled="\{ true }" option="success-o"&gt;Success&lt;/rui-button&gt;<br />
      &lt;/p&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Simple Example</rui-header>
  <p>Example button listening to the click event.</p>
  <rui-panel>
    <rui-panel-container>
      <rui-button option="primary" onclick={ addOne }>Add</rui-button>
      <rui-button option="danger" onclick={ subtractOne }>Subtract</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <strong>Value: </strong> { exampleValue }
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
&lt;rui-panel&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-button option="primary" onclick=\{ addOne }&gt;Add&lt;/rui-button&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-button option="danger" onclick=\{ subtractOne }&gt;Subtract&lt;/rui-button&gt;<br />
&nbsp;&nbsp;&lt;/rui-panel-container&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;<br />
&nbsp;&nbsp;&nbsp;&nbsp;&lt;strong&gt;Value: &lt;/strong&gt; \{ exampleValue }<br />
&nbsp;&nbsp;&lt;/rui-panel-container&gt;<br />
&lt;/rui-panel&gt;
<br />
&lt;script&gt;<br />
&nbsp;&nbsp;var self = this;<br />
&nbsp;&nbsp;self.exampleValue = 0;<br />
  <br />
&nbsp;&nbsp;self.addOne = function () {<br />
&nbsp;&nbsp;&nbsp;&nbsp;self.exampleValue += 1;<br />
&nbsp;&nbsp;}<br />
  <br />
&nbsp;&nbsp;self.subtractOne = function () {<br />
&nbsp;&nbsp;&nbsp;&nbsp;self.exampleValue -= 1;<br />
&nbsp;&nbsp;}<br />
&lt;/script&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header>Button Groups</rui-header>
  <p>Group a series of buttons together on a single line with the button group.</p>
  <rui-panel>
    <rui-panel-container>
      <rui-group>
        <rui-button option="primary">First</rui-button>
        <rui-button option="primary">Second</rui-button>
        <rui-button option="primary">Third</rui-button>
        <rui-button option="primary">Fourth</rui-button>
      </rui-group>
      <rui-group>
        <rui-button option="secondary">First</rui-button>
        <rui-button option="secondary">Second</rui-button>
        <rui-button option="secondary">Third</rui-button>
        <rui-button option="secondary">Fourth</rui-button>
      </rui-group>
      <rui-group>
        <rui-button option="success">First</rui-button>
        <rui-button option="success">Second</rui-button>
        <rui-button option="success">Third</rui-button>
        <rui-button option="success">Fourth</rui-button>
      </rui-group>
      <rui-group>
        <rui-button option="info">First</rui-button>
        <rui-button option="info">Second</rui-button>
        <rui-button option="info">Third</rui-button>
        <rui-button option="info">Fourth</rui-button>
      </rui-group>
      <rui-group>
        <rui-button option="warning">First</rui-button>
        <rui-button option="warning">Second</rui-button>
        <rui-button option="warning">Third</rui-button>
        <rui-button option="warning">Fourth</rui-button>
      </rui-group>
      <rui-group>
        <rui-button option="danger">First</rui-button>
        <rui-button option="danger">Second</rui-button>
        <rui-button option="danger">Third</rui-button>
        <rui-button option="danger">Fourth</rui-button>
      </rui-group>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-group&gt;<br />
        &nbsp;&nbsp;&lt;rui-button option="primary"&gt;First&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button option="primary"&gt;Second&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button option="primary"&gt;Third&lt;/rui-button&gt;<br />
        &nbsp;&nbsp;&lt;rui-button option="primary"&gt;Forth&lt;/rui-button&gt;<br />
        &lt;/rui-group&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);

    self.exampleValue = 0;

    self.addOne = function () {
      self.exampleValue += 1;
    }

    self.subtractOne = function () {
      self.exampleValue -= 1;
    }
  </script>

</app-button>
