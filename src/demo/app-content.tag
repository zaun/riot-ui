import { domEvent, parentScope } from 'riot-mixin-pack'

<app-content>
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
      </rui-code>
    </rui-panel-container>
  </rui-panel>

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
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header>Video</rui-header>
  <p>The <code>rui-video</code> is a quick way to embed video from popular hosting services such as YouTube.</p>

  <rui-panel>
    <rui-panel-container>
      <rui-video youtube-id="xCoxGV7j71c"></rui-video>
    </rui-panel-container>
    <rui-panel-container>
      <rui-video vimeo-id="162348702"></rui-video>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-video youtube-id="xCoxGV7j71c"&gt;&lt;/rui-video&gt;<br />
        &lt;rui-video vimeo-id="162348702"&gt;&lt;/rui-video&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-content>
