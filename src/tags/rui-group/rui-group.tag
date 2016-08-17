import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-group>
  <!-- @include rui-group.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
  </script>

  <style scoped>
    <!-- @include rui-group.css -->
  </style>
</rui-group>
