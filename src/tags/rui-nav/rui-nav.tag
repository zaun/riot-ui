import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-nav>
  <!-- @include rui-nav.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
  </script>

  <style scoped>
    <!-- @include rui-nav.css -->
  </style>
</rui-nav>
