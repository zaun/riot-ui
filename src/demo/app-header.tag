import { domEvent, parentScope } from 'riot-mixin-pack'

<app-header>
  
  <rui-header>Headers</rui-header>
  <p>The <code>rui-header</code> is an advanced header replacement for <code>h1</code> style
  tags. It also works with <code>rui-toc</code> to generate a table of contents.</p>

  <rui-panel>
    <rui-panel-container>
      <rui-header no-toc>Level 1</rui-header>
      <rui-header level="2" no-toc>Level 2</rui-header>
      <rui-header level="3" no-toc>Level 3</rui-header>
      <rui-header level="4" no-toc>Level 4</rui-header>
      <rui-header level="5" no-toc>Level 5</rui-header>
      <rui-header level="6" no-toc>Level 6</rui-header>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
      &lt;rui-header level="2" no-toc&gt;Level 2&lt;/rui-header&gt;<br />
      &lt;rui-header level="3" no-toc&gt;Level 3&lt;/rui-header&gt;<br />
      &lt;rui-header level="4" no-toc&gt;Level 4&lt;/rui-header&gt;<br />
      &lt;rui-header level="5" no-toc&gt;Level 5&lt;/rui-header&gt;<br />
      &lt;rui-header level="6" no-toc&gt;Level 6&lt;/rui-header&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

</app-header>
