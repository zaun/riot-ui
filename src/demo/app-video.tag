import { domEvent, parentScope } from 'riot-mixin-pack'

<app-video>
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

</app-video>
