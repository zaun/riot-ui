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

  <rui-header level="2">Grid Tiers</rui-header>
  <ul>
    <li>
      320 pixels (Phones)
      <dd>Designed for phone screens such as the iPhone and Galaxy S5</dd>
    </li>
    <li>
      640 pixels (Tables)
      <dd>Designed for tablet screens such as the iPad and larger phones in landscape such as the iPhone 6</dd>
    </li>
    <li>
      1024 pixels (XGA)
      <dd>Designed for older monitors</dd>
    </li>
    <li>
      1280 pixels (720p)
      <dd>Designed for modern smaller monitors</dd>
    </li>
    <li>
      1920 pixels (1080p)
      <dd>Designed for modern larger monitors.</dd>
    </li>
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

  <rui-header level="2">Show columns based on width</rui-header>
  <rui-panel>
    <rui-panel-container>
      <rui-container>
        <rui-row>
          <rui-col sm="100" xl-visible>xl-visible: Visible on <strong>extra-large</strong> and above</rui-col>
          <rui-col sm="100" lg-visible>lg-visible: Visible on <strong>large</strong> and above</rui-col>
          <rui-col sm="100" md-visible>md-visible: Visible on <strong>medium</strong> and above</rui-col>
          <rui-col sm="100" sm-visible>sm-visible: Visible on <strong>small</strong> and above</rui-col>
          <rui-col sm="100" xs-visible>xs-visible: Visible on <strong>extra-small</strong> and above</rui-col>
        </rui-row>
      </rui-container>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Hide columns based on width</rui-header>
  <rui-panel>
    <rui-panel-container>
      <rui-container>
        <rui-row>
          <rui-col sm="100" xl-hidden>xl-hidden: Hide on <strong>extra-large</strong> and below</rui-col>
          <rui-col sm="100" lg-hidden>lg-hidden: Hide on <strong>large</strong> and below</rui-col>
          <rui-col sm="100" md-hidden>md-hidden: Hide on <strong>medium</strong> and below</rui-col>
          <rui-col sm="100" sm-hidden>sm-hidden: Hide on <strong>small</strong> and below</rui-col>
          <rui-col sm="100" xs-hidden>xs-hidden: Hide on <strong>extra-small</strong> and below</rui-col>
        </rui-row>
      </rui-container>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
      </rui-code>
    </rui-panel-container>
  </rui-panel>

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
