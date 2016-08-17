import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-col>
  <!-- @include rui-col.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
  </script>

  <style scoped>
    <!-- @include rui-col.css -->
  </style>
</rui-col>
