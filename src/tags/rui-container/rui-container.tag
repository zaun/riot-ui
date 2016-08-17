import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-container>
  <!-- @include rui-container.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
  </script>

  <style scoped>
    <!-- @include rui-container.css -->
  </style>
</rui-container>
