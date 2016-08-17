import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-checkbox>
  <!-- @include rui-checkbox.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
    <!-- @include rui-checkbox.js -->
  </script>

  <style scoped>
    <!-- @include rui-checkbox.css -->
  </style>
</rui-checkbox>
