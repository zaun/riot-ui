import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-addon>
  <!-- @include rui-addon.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
  </script>

  <style scoped>
    <!-- @include rui-addon.css -->
  </style>
</rui-addon>
