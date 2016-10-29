import { domEvent, parentScope } from 'riot-mixin-pack'

<app-badges>
  <rui-header>Badges</rui-header>
  <p>The <code>rui-badge</code> is a simple count indicator that can be added to other controls.</p>

  <rui-panel>
    <rui-panel-container>
      <rui-badge>9</rui-badge>
      <rui-badge>99</rui-badge>
      <rui-badge>999</rui-badge>
      <rui-badge>9999</rui-badge>
    </rui-panel-container>
    <rui-panel-container>
      <rui-button>
        Test
        <rui-badge>9</rui-badge>
      </rui-button>
      <rui-button>
        Test
        <rui-badge>99</rui-badge>
      </rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-badge&gt;9&lt;/rui-badge&gt;<br />
        &lt;rui-badge&gt;99&lt;/rui-badge&gt;<br />
        &lt;rui-badge&gt;999&lt;/rui-badge&gt;<br />
        &lt;rui-badge&gt;9999&lt;/rui-badge&gt;<br />
        <br />
        &lt;rui-button&gt;<br />
        &nbsp;&nbsp;Test<br />
        &nbsp;&nbsp;&lt;rui-badge&gt;9&lt;/rui-badge&gt;<br />
        &lt;/rui-button&gt;<br />
        &lt;rui-button&gt;<br />
        &nbsp;&nbsp;Test<br />
        &nbsp;&nbsp;&lt;rui-badge&gt;99&lt;/rui-badge&gt;<br />
        &lt;/rui-button&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>
</app-badges>
