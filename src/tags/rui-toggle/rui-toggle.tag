import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-toggle>
  <!-- @include rui-toggle.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
    <!-- @include rui-toggle.js -->
  </script>

  <style scoped>
    <!-- @include rui-toggle.css -->
  </style>
</rui-toggle>
