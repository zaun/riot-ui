import { domEvent, parentScope } from 'riot-mixin-pack'

<app-checkbox>
  <rui-header>Checkboxes</rui-header>
  <p></p>

  <rui-header level="2">Regular Checkbox</rui-header>
  <p></p>
  <rui-panel>
    <rui-panel-container>
      <rui-checkbox>Default Checkbox</rui-checkbox>
      <rui-checkbox option="primary">Primary Checkbox</rui-checkbox>
      <rui-checkbox option="secondary">Secondary Checkbox</rui-checkbox>
      <rui-checkbox option="success">Success Checkbox</rui-checkbox>
      <rui-checkbox option="info">Info Checkbox</rui-checkbox>
      <rui-checkbox option="warning">Warning Checkbox</rui-checkbox>
      <rui-checkbox option="danger">Danger Checkbox</rui-checkbox>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Sizes</rui-header>
  <p></p>
  <rui-panel>
    <rui-panel-container>
      <rui-checkbox size="sm">Small Checkbox</rui-checkbox>
    </rui-panel-container>
    <rui-panel-container>
      <rui-checkbox size="lg">Large Checkbox</rui-checkbox>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Disabled Checkbox</rui-header>
  <p></p>
  <rui-panel>
    <rui-panel-container>
      <rui-checkbox disabled>Default Checkbox</rui-checkbox>
      <rui-checkbox disabled="disabled"option="primary">Primary Checkbox</rui-checkbox>
      <rui-checkbox disabled="{ true }" option="secondary">Secondary Checkbox</rui-checkbox>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-checkbox disabled&gt;Default Checkbox&lt;/rui-checkbox&gt;<br />
        &lt;rui-checkbox disabled="disabled"option="primary"&gt;Primary Checkbox&lt;/rui-checkbox&gt;<br />
        &lt;rui-checkbox disabled="{ true }" option="secondary"&gt;Secondary Checkbox&lt;/rui-checkbox&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-checkbox>
