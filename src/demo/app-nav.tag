import { domEvent, parentScope } from 'riot-mixin-pack'

<app-nav>
  <rui-header>Navigation bar</rui-header>
  <p>The <code>rui-nav</code> is a simple bar designed to stay at the top of its containing element.</p>

  <rui-header level="2">Quick start example</rui-header>
  <rui-panel>
    <rui-panel-container>
      <rui-nav>
        <rui-container>
          <rui-nav-item type="brand">Brand</rui-nav-item>
          <rui-nav-item>Text</rui-nav-item>
          <rui-nav-item href="#">Link</rui-nav-item>
          <rui-nav-item onclick="alert('Menu Clicked')">Javascript</rui-nav-item>
          <rui-nav-item active>Active</rui-nav-item>
          <rui-nav-item align="right">Right</rui-nav-item>
        </rui-container>
      </rui-nav>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-nav&gt;<br />
        &nbsp;&nbsp;&lt;rui-container&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-nav-item type="brand"&gt;Brand&lt;/rui-nav-item&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-nav-item&gt;Text&lt;/rui-nav-item&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-nav-item href="#"&gt;Link&lt;/rui-nav-item&gt;<br />
        &nbsp;&nbsp;&nbsp;&nbsp;&lt;rui-nav-item align="right"&gt;Right&lt;/rui-nav-item&gt;<br />
        &nbsp;&nbsp;&lt;/rui-container&gt;<br />
        &lt;/rui-nav&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <p>The <code>rui-nav</code> control works inside the <code>body</code>,
  <code>rui-container</code> and <code>rui-panel</code> tags. Additionally when
  used in the <code>body</code> tag adding a <code>fixed</code> attribute will keep
  the navigation bar pinned to the top of the screen whole scrolling.</p>

  <rui-header>Table of Contents</rui-header>
  <p>The <code>rui-toc</code> automatic table of contents based on the <code>rui-header</code> tags on the page.</p>

  <rui-panel>
    <rui-panel-container>
      <rui-toc></rui-toc>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-toc&gt;&lt;/rui-toc&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-panel option="warning">
    <ul>
      <li>Link to header as anchor</li>
      <li>Auto highlight current section</li>
    </ul>
  </rui-panel>

  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-nav>
