import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-panel>
  <!-- @include rui-panel.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
  </script>

  <style scoped>
    <!-- @include rui-panel.css -->
  </style>
</rui-panel>

<rui-panel-container>
  <yield />

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
  </script>

  <style scoped>
  :scope {
    display: block;
    margin: 0;
    padding: 0;
    overflow: hidden;
    padding: 0.5rem;
  }
  :scope > rui-code {
    margin: -0.5rem;
    border-width: 0;
    border-radius: 0;
  }
  :scope > rui-nav > .navbar {
    border-width: 0;
    border-top-right-radius: .25rem;
    border-top-left-radius: .25rem;
  }

  :scope > rui-container {
    min-width: inherit;
  }
  </style>
</rui-panel-container>
