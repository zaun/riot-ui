import { domEvent, parentScope } from 'riot-mixin-pack'

<app-thumbnail>
  <rui-header>Thumbnails</rui-header>
  <p></p>
  <rui-panel>
    <rui-panel-container>
      <rui-container>
        <rui-col sm="33">
          <rui-thumbnail src="http://lorempixel.com/200/200/animals/1" title="Title of Picture">
            Some information about the picture. Maybe a little description or the photographer.
          </rui-thumbnail>
        </rui-col>
        <rui-col sm="33">
          <rui-thumbnail src="http://lorempixel.com/200/200/animals/2" title="Title of Picture">
            Some information about the picture. Maybe a little description or the photographer.
          </rui-thumbnail>
        </rui-col>
        <rui-col sm="33">
          <rui-thumbnail src="http://lorempixel.com/200/200/animals/3" title="Title of Picture">
            Some information about the picture. Maybe a little description or the photographer.
          </rui-thumbnail>
        </rui-col>
      </rui-container>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-container&gt;<br />
          &lt;rui-col sm="33"&gt;<br />
            &lt;rui-thumbnail src="http://lorempixel.com/200/200/animals/1" title="Title of Picture"&gt;<br />
              Some information about the picture. Maybe a little description or the photographer.<br />
            &lt;/rui-thumbnail&gt;<br />
          &lt;/rui-col&gt;<br />
          &lt;rui-col sm="33"&gt;<br />
            &lt;rui-thumbnail src="http://lorempixel.com/200/200/animals/2" title="Title of Picture"&gt;<br />
              Some information about the picture. Maybe a little description or the photographer.<br />
            &lt;/rui-thumbnail&gt;<br />
          &lt;/rui-col&gt;<br />
          &lt;rui-col sm="33"&gt;<br />
            &lt;rui-thumbnail src="http://lorempixel.com/200/200/animals/3" title="Title of Picture"&gt;<br />
              Some information about the picture. Maybe a little description or the photographer.<br />
            &lt;/rui-thumbnail&gt;<br />
          &lt;/rui-col&gt;<br />
        &lt;/rui-container&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-thumbnail>
