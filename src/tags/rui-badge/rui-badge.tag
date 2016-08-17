import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-badge>
  <!-- @include rui-badge.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
    <!-- @include rui-badge.js -->
  </script>

  <style scoped>
    <!-- @include rui-badge.css -->
  </style>
</rui-badge>
