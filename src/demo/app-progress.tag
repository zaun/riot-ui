import { domEvent, parentScope } from 'riot-mixin-pack'

<app-progress>
  <rui-header>Progress Bars</rui-header>
  <p></p>

  <rui-panel>
    <rui-panel-container>
      <rui-progress></rui-progress>
      <rui-progress value="60" show-label></rui-progress>
      <rui-progress value="2" min="1" max="5"></rui-progress>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-progress&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="60" show-label&gt;&lt;/rui-progress&gt;<br />
        &lt;rui-progress value="2" min="1" max="5"&gt;&lt;/rui-progress&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>


  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-progress>
