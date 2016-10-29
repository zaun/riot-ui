import { domEvent, parentScope } from 'riot-mixin-pack'

<app-pannel>
  <rui-header>Panels</rui-header>
  <p>The <code>rui-panel</code> and <code>rui-panel-container</code> tags can be used to
  organize and call out information.</p>

  <rui-panel>
    <rui-panel-container>
      <rui-panel>
        <rui-panel-container>Default</rui-panel-container>
      </rui-panel>

      <rui-panel>
        <rui-panel-container>First Container</rui-panel-container>
        <rui-panel-container>Second Container</rui-panel-container>
        <rui-panel-container>Third Container</rui-panel-container>
      </rui-panel>

      <rui-panel option="primary">
        <rui-panel-container>Primary</rui-panel-container>
      </rui-panel>

      <rui-panel option="secondary">
        <rui-panel-container>Secondary</rui-panel-container>
      </rui-panel>

      <rui-panel option="success">
        <rui-panel-container>Success</rui-panel-container>
      </rui-panel>

      <rui-panel option="info">
        <rui-panel-container>Info</rui-panel-container>
      </rui-panel>

      <rui-panel option="warning">
        <rui-panel-container>Warning</rui-panel-container>
      </rui-panel>

      <rui-panel option="danger">
        <rui-panel-container>Danger</rui-panel-container>
      </rui-panel>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
&lt;rui-panel&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;Default&lt;/rui-panel-container&gt;<br />
&lt;/rui-panel&gt;<br />
<br />
&lt;rui-panel&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;First Container&lt;/rui-panel-container&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;Second Container&lt;/rui-panel-container&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;Third Container&lt;/rui-panel-container&gt;<br />
&lt;/rui-panel&gt;<br />
<br />
&lt;rui-panel option="primary"&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;Primary&lt;/rui-panel-container&gt;<br />
&lt;/rui-panel&gt;<br />
<br />
&lt;rui-panel option="secondary"&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;Secondary&lt;/rui-panel-container&gt;<br />
&lt;/rui-panel&gt;<br />
<br />
&lt;rui-panel option="success"&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;Success&lt;/rui-panel-container&gt;<br />
&lt;/rui-panel&gt;<br />
<br />
&lt;rui-panel option="info"&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;Info&lt;/rui-panel-container&gt;<br />
&lt;/rui-panel&gt;<br />
<br />
&lt;rui-panel option="warning"&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;Warning&lt;/rui-panel-container&gt;<br />
&lt;/rui-panel&gt;<br />
<br />
&lt;rui-panel option="danger"&gt;<br />
&nbsp;&nbsp;&lt;rui-panel-container&gt;Danger&lt;/rui-panel-container&gt;<br />
&lt;/rui-panel&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-pannel>
