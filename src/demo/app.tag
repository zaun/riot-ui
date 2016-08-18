<app>
  <rui-nav fixed>
    <rui-container>
      <rui-nav-item type="brand">Riot-UI</rui-nav-item>
      <rui-nav-item sm-hidden href="#/navigation" active="{ view == 'navigation' }">Navigation</rui-nav-item>
      <rui-nav-item sm-hidden href="#/grid" active="{ view == 'grid' }">Grid System</rui-nav-item>
      <rui-nav-item sm-hidden href="#/inputs" active="{ view == 'inputs' }">Input Controls</rui-nav-item>
      <rui-nav-item sm-hidden href="#/content" active="{ view == 'content' }">Content Controls</rui-nav-item>
      <rui-nav-item sm-hidden href="#/icons" active="{ view == 'icons' }">Icons</rui-nav-item>
      <rui-nav-item align="right" href="https://github.com/zaun/riot-ui">Github</rui-nav-item>
    </rui-container>
  </rui-nav>

  <rui-container>
    <rui-row>
      <rui-col sm="100">
        <rui-container class="callout" show="{ view == 'navigation' }">
          <h1>Navigation</h1>
          <p>The nav is a simple wrapper for positioning branding, navigation, and
          other elements into a concise navigation header.</p>
        </rui-container>
        <rui-container class="callout" show="{ view == 'grid' }">
          <h1>Grid System</h1>
          <p>Riot-UI includes a powerful mobile-first grid system for building layouts of all shapes and sizes.
            It’s based on column layout and has multiple tiers, one for each media query range.</p>
        </rui-container>
        <rui-container class="callout" show="{ view == 'inputs' }">
          <h1>Input Controls</h1>
          <p>Want the user to interact with your webpage?</p>
        </rui-container>
        <rui-container class="callout" show="{ view == 'content' }">
          <h1>Content Controls</h1>
          <p>Want to display information to your users?</p>
        </rui-container>
        <rui-container class="callout" show="{ view == 'icons' }">
          <h1>Icons</h1>
          <p>Riot-UI includes several tags to place icons inline.</p>
        </rui-container>
      </rui-col>
    </rui-row>

    <rui-row>
      <rui-col md="25" sm-hidden>
        <rui-toc></rui-toc>
      </rui-col>
      <rui-col md="75" xs="100">
        <app-nav if="{ view == 'navigation' }"></app-nav>
        <app-grid if="{ view == 'grid' }"></app-grid>
        <app-button if="{ view == 'inputs' }"></app-button>
        <app-input if="{ view == 'inputs' }"></app-input>
        <app-toggle if="{ view == 'inputs' }"></app-toggle>
        <app-content if="{ view == 'content' }"></app-content>
        <app-checkbox if="{ view == 'inputs' }"></app-checkbox>
        <app-icons if="{ view == 'icons' }"></app-icons>
      </rui-col>
    </rui-row>
  <rui-container>

  <script>
    if (!String.prototype.toProperCase) {
      String.prototype.toProperCase = function () {
        return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
      };
    }
    var self = this;

    self.view = '';

    riot.route(function(collection) {
      if (collection) {
        self.view = collection.toLowerCase();
        self.update();
      } else {
        location.href = '#/navigation'
      }
    });
    riot.route.start(true);
  </script>
</app>
