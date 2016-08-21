import { domEvent, parentScope } from 'riot-mixin-pack'

<app-progress>
  <rui-header>Progress Bars</rui-header>
  <p></p>

  <rui-panel>
    <rui-panel-container>
      <rui-progress></rui-progress>
      <rui-progress value="25"></rui-progress>
      <rui-progress value="3" min="1" max="5"></rui-progress>
      <rui-progress value="75" show-label></rui-progress>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-progress&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="25"&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="3" min="1" max="5"&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="75" show-label&gt;&lt;/rui-progress&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Alternatives</rui-header>
  <p></p>

  <rui-panel>
    <rui-panel-container>
      <rui-progress value="75" show-label option="primary"></rui-progress>
      <rui-progress value="50" show-label option="secondary"></rui-progress>
      <rui-progress value="25" show-label option="success"></rui-progress>
      <rui-progress value="25" show-label option="info"></rui-progress>
      <rui-progress value="50" show-label option="warning"></rui-progress>
      <rui-progress value="75" show-label option="danger"></rui-progress>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-progress value="75" show-label option="primary"&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="50" show-label option="secondary"&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="25" show-label option="success"&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="25" show-label option="info"&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="50" show-label option="warning"&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="75" show-label option="danger"&gt;&lt;/rui-progress&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>


  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-progress>
