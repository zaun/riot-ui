import { domEvent, parentScope } from 'riot-mixin-pack'

<app-toggle>
  <rui-header>Toggle</rui-header>
  <p></p>

  <rui-header level="2">Regular Toggles</rui-header>
  <p></p>
  <rui-panel>
    <rui-panel-container>
      <rui-toggle option="primary" />
      <rui-toggle option="secondary" left="Fast" right="Slow" />
      <rui-toggle option="success" knob="TV" />
      <rui-toggle option="info" left="Up" right="Down" />
      <rui-toggle option="warning" left="Inner" knob="Space" right="Outter" />
      <rui-toggle option="danger" left="Dog" right="Cat" />
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-toggle option="primary" /&gt;<br />
        &lt;rui-toggle option="secondary" left="Fast" right="Slow" /&gt;<br />
        &lt;rui-toggle option="success" knob="TV" /&gt;<br />
        &lt;rui-toggle option="info" left="Up" right="Down" /&gt;<br />
        &lt;rui-toggle option="warning" left="Inner" knob="Space" right="Outter" /&gt;<br />
        &lt;rui-toggle option="danger" left="Dog" right="Cat" /&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Disabled State</rui-header>
  <p></p>
  <rui-panel>
    <rui-panel-container>
      <rui-toggle disabled option="primary" />
      <rui-toggle disabled="disabled" option="secondary" left="Fast" right="Slow" />
      <rui-toggle disabled="{ true }" option="success" knob="TV" />
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-toggle>
