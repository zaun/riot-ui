import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-row>
  <!-- @include rui-row.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
  </script>

  <style scoped>
    <!-- @include rui-row.css -->
  </style>
</rui-row>
