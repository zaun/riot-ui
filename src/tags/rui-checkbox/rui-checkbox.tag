import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-checkbox>
  <!-- @include rui-checkbox.html -->

  <script>
    var self = this;
    if (self.parent) {
      self.mixin(parentScope);
    }
    self.mixin(domEvent);
    <!-- @include rui-checkbox.js -->
  </script>

  <style scoped>
    <!-- @include rui-checkbox.css -->
  </style>
</rui-checkbox>
