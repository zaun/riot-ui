import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-nav-item>
  <!-- @include rui-nav-item.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
    <!-- @include rui-nav-item.js -->
  </script>

  <style scoped>
    <!-- @include rui-nav-item.css -->
  </style>
</rui-nav-item>
