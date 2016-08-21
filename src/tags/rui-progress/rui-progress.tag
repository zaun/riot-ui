import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-progress>
  <!-- @include rui-progress.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
    <!-- @include rui-progress.js -->
  </script>

  <style scoped>
    <!-- @include rui-progress.css -->
  </style>
</rui-progress>
