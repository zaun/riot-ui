import { domEvent, parentScope } from 'riot-mixin-pack'

<app-grid>
  <rui-header>How it works</rui-header>
  <p>At a high level, here’s how the grid system works:</p>
  <ul>
    <li>There are three major components: <code>rui-container</code>, <code>rui-row</code>, and <code>rui-col</code>.</li>
    <li>Containers center your site’s contents and help align your grid content.</li>
    <li>Rows are horizontal groups of columns that ensure your columns are lined up properly.</li>
    <li>Content should be placed within columns, and only columns may be immediate children of rows.</li>
    <li>Column widths are set in percentages, so they’re always fluid and sized relative to their parent element.</li>
    <li>Columns have horizontal padding to create the gutters between individual columns.</li>
    <li>There are five grid tiers: extra small, small, medium, large, and extra large.</li>
    <li>Grid tiers are based on minimum widths, meaning they apply to that one tier and all those above it.</li>
  </ul>

  <rui-header level="2">Quick start example</rui-header>
  <rui-panel>
    <rui-panel-container>
      <rui-container>
        <rui-row>
          <rui-col sm="33">One of Three columns</rui-col>
          <rui-col sm="33">Two of Three columns</rui-col>
          <rui-col sm="34">Three of Three columns</rui-col>
        </rui-row>
        <rui-row>
          <rui-col sm="66">One of Two columns</rui-col>
          <rui-col sm="34">Two of Two columns</rui-col>
        </rui-row>
        <rui-row>
          <rui-col sm="33">One of Two columns</rui-col>
          <rui-col sm="67">Two of Two columns</rui-col>
        </rui-row>
      </rui-container>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-container&gt;<br />
        &nbsp;&nbsp;&lt;rui-row&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="33"&gt;One of three columns&lt;/rui-col&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="33"&gt;Two of three columns&lt;/rui-col&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="34"&gt;Trhee of three columns&lt;/rui-col&gt;<br />
        &nbsp;&nbsp;&lt;/rui-row&gt;<br />
        &nbsp;&nbsp;&lt;rui-row&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="66"&gt;One of Two columns&lt;/rui-col&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="34"&gt;Two of Two columns&lt;/rui-col&gt;<br />
        &nbsp;&nbsp;&lt;/rui-row&gt;<br />
        &nbsp;&nbsp;&lt;rui-row&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="33"&gt;One of Two columns&lt;/rui-col&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-col sm="67"&gt;Two of Two columns&lt;/rui-col&gt;<br />
        &nbsp;&nbsp;&lt;/rui-row&gt;<br />
        &lt;/rui-container&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>
  <p>The above example creates three equal-width columns on small, medium, large, and extra large devices.
    This example also has added padding and boarders to the rui-col elements to make it clear where the columns are.</p>

  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

  <style scoped>
    rui-col {
      padding: 1em;
      border: 1px dashed #ccc;
    }
  </style>
</app-grid>
