import { domEvent, parentScope } from 'riot-mixin-pack'
import ruiEventBusMixin from '../processed/rui-event-bus'

<rui-toc>
  <!-- @include rui-toc.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent).mixin(ruiEventBusMixin);
    <!-- @include rui-toc.js -->
  </script>

  <style scoped>
    <!-- @include rui-toc.css -->
  </style>
</rui-toc>
