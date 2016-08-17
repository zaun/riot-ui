import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-emoji>
  <!-- @include rui-emoji.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
    <!-- @include rui-emoji.js -->
  </script>

  <style scoped>
    <!-- @include rui-emoji.css -->
  </style>
</rui-emoji>
