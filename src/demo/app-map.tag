import { domEvent, parentScope } from 'riot-mixin-pack'

<app-map>
  <rui-header>Map</rui-header>
  <p>The <code>rui-map</code> tag lets you add a map quickly and easily.</p>

  <rui-panel>
    <rui-panel-container>
      <rui-map google-key="AIzaSyBM8B3sh3IgKmK-SO9aD3a9SwnUQsbpSvg" display="8:2" lat="-34.397" lng="150.644" xs-zoom="5" sm-zoom="6" md-zoom="7"></rui-map>
    </rui-panel-container>
    <rui-panel-container>
      <rui-map bing-key="AkcUotT-NTZH3NW_WbJAhlnqraFGwd-l21f8aDkpFRiNfVtoulqcCt9v7JpnyWVF" display="8:2" lat="-34.397" lng="150.644"></rui-map>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-map google-key="GOOGLE-API-KEY" display="8:2" lat="-34.397" lng="150.644"&gt;&lt;/rui-map&gt;<br />
        &lt;rui-map bing-key="BING-API-KEY" display="8:2" lat="-34.397" lng="150.644"&gt;&lt;/rui-map&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Marker Icon</rui-header>
  <p>Add a marker icon to the current location.</p>

  <rui-panel>
    <rui-panel-container>
      <rui-container>
        <rui-col sm="33">
          <rui-map google-key="AIzaSyBM8B3sh3IgKmK-SO9aD3a9SwnUQsbpSvg" display="1:1" lat="-34.397" lng="150.644" icon="star"></rui-map>
        </rui-col>
        <rui-col sm="33">
          <rui-map google-key="AIzaSyBM8B3sh3IgKmK-SO9aD3a9SwnUQsbpSvg" display="1:1" lat="-34.397" lng="150.644" icon="info"></rui-map>
        </rui-col>
        <rui-col sm="33">
          <rui-map google-key="AIzaSyBM8B3sh3IgKmK-SO9aD3a9SwnUQsbpSvg" display="1:1" lat="-34.397" lng="150.644" icon="default"></rui-map>
        </rui-col>
      </rui-container>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-map google-key="GOOGLE-API-KEY" display="1:1" lat="-34.397" lng="150.644" icon="star"&gt;&lt;/rui-map&gt;<br />
        &lt;rui-map google-key="GOOGLE-API-KEY" display="1:1" lat="-34.397" lng="150.644" icon="info"&gt;&lt;/rui-map&gt;<br />
        &lt;rui-map google-key="GOOGLE-API-KEY" display="1:1" lat="-34.397" lng="150.644" icon="default"&gt;&lt;/rui-map&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-map>
