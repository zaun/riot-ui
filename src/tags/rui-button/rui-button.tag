import { domEvent, parentScope } from 'riot-mixin-pack'

<rui-button>
  <!-- @include rui-button.html -->

  <script>
    var self = this;
    if (self.parent) {
      self.mixin(parentScope);
    }
    self.mixin(domEvent);
    <!-- @include rui-button.js -->
  </script>

  <style scoped>
    <!-- @include rui-button.css -->
  </style>
</rui-button>
