import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-input>
  <!-- @include rui-input.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
    <!-- @include ../keycodes.js -->
    <!-- @include rui-input.js -->
  </script>

  <style scoped>
    <!-- @include rui-input.css -->
  </style>
</rui-input>
