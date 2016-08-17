import { domEvent, parentScope } from 'riot-mixin-pack'

<app-input>
  <rui-header>Inputs</rui-header>
  <p></p>

  <rui-header level="2">Quick start example</rui-header>
  <p></p>
  <rui-panel>
    <rui-panel-container>
      <rui-input />
      <rui-input placeholder="Example Input"/>
      <rui-input disabled placeholder="Disabled Input"/>
      <rui-input value="Default Value"/>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
&lt;rui-input /&gt;<br />
&lt;rui-input placeholder="Example Input"/&gt;<br />
&lt;rui-input disabled placeholder="Disabled Input"/&gt;<br />
&lt;rui-input value="Default Value"/&gt;<br />
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Sizes</rui-header>
  <p>Fancy larger or smaller inputs?</p>
  <rui-panel>
    <rui-panel-container>
      <rui-input size="lg" placeholder="Large Input"/>
      <rui-input size="sm" placeholder="Small Input"/>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
&lt;rui-input size="lg" placeholder="Large Input"/&gt;<br />
&lt;rui-input size="sm" placeholder="Small Input"/&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Types</rui-header>
  <p>Limit the type of input</p>
  <rui-panel>
    <rui-panel-container>
      <rui-input type="text" placeholder="Text (default)"/>
      <rui-input type="decimal" placeholder="Decimal"/>
      <rui-input type="integer" placeholder="Integer"/>
      <rui-input type="hex" placeholder="Hex"/>
      <rui-input type="alpha" placeholder="Alpha"/>
      <rui-input type="alphanumeric" placeholder="Alphanumeric"/>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
&lt;rui-input type="text" placeholder="Text (default)"/&gt;<br />
&lt;rui-input type="decimal" placeholder="Decimal"/&gt;<br />
&lt;rui-input type="integer" placeholder="Integer"/&gt;<br />
&lt;rui-input type="hex" placeholder="Hex"/&gt;<br />
&lt;rui-input type="alpha" placeholder="Aplha"/&gt;<br />
&lt;rui-input type="alphanumeric" placeholder="Alphanumeric"/&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-panel option="warning">
    <ul>
      <li>Add functionality similar to <a href="http://firstopinion.github.io/formatter.js/">formatter.js</a> to the control.</li>
    </ul>
  </rui-panel>

  <rui-header>Input Groups</rui-header>
  <p></p>
  <rui-panel>
    <rui-panel-container>
      <rui-group>
        <rui-input placeholder="Recipient's username"/>
        <rui-addon>@example.com</rui-addon>
      </rui-group>
      <rui-group>
        <rui-addon>@</rui-addon>
        <rui-input placeholder="Username"/>
      </rui-group>
      <rui-group>
        <rui-addon>$</rui-addon>
        <rui-input />
        <rui-addon>.00</rui-addon>
      </rui-group>
      <rui-group>
        <rui-input placeholder="Search..." />
        <rui-button>GO</rui-button>
      </rui-group>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
&lt;rui-group&gt;<br />
  &lt;rui-input placeholder="Recipient's username"/&gt;<br />
  &lt;rui-addon&gt;@example.com&lt;/rui-addon&gt;<br />
&lt;/rui-group&gt;<br />
&lt;rui-group&gt;<br />
  &lt;rui-addon&gt;@&lt;/rui-addon&gt;<br />
  &lt;rui-input placeholder="Username"/&gt;<br />
&lt;/rui-group&gt;<br />
&lt;rui-group&gt;<br />
  &lt;rui-addon&gt;$&lt;/rui-addon&gt;<br />
  &lt;rui-input /&gt;<br />
  &lt;rui-addon&gt;.00&lt;/rui-addon&gt;<br />
&lt;/rui-group&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <rui-header level="2">Input Examples</rui-header>
  <p>Several simple examples of functionality</p>
  <rui-panel>
    <rui-panel-container>
      <rui-group>
        <rui-input id="searchInput" placeholder="Search..." />
        <rui-button onclick="{ doSearch }">GO</rui-button>
      </rui-group>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
&lt;rui-group&gt;<br />
  &lt;rui-input id="searchInput" placeholder="Search..." /&gt;<br />
  &lt;rui-button option="secondary" onclick="\{ doSearch }"&gt;GO&lt;/rui-button&gt;<br />
&lt;/rui-group&gt;<br />
&lt;script&gt;<br />
  this.doSearch = function () {<br />
  var el = document.getElementById('searchInput');<br />
    alert('Search for: ' + el.value);<br />
    el.clear();<br />
    self.update();<br />
  };<br />
&lt;/script&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);

    self.doSearch = function () {
      var el = document.getElementById('searchInput');
      alert('Search for: ' + el.value);
      el.clear();
      self.update();
    };
  </script>

</app-input>
