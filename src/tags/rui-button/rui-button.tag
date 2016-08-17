import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-button>
  <!-- @include rui-button.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
    <!-- @include rui-button.js -->
  </script>

  <style scoped>
    <!-- @include rui-button.css -->
  </style>
</rui-button>
