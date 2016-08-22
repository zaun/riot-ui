import { domEvent, parentScope } from 'riot-mixin-pack'
import ruiEventBusMixin from '../processed/rui-event-bus'
import ruiUtil from '../processed/rui-util'


<rui-code>
  <!-- @include rui-code.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent).mixin(ruiEventBusMixin).mixin(ruiUtil);
    <!-- @include rui-code.js -->
  </script>

  <style scoped>
    <!-- @include rui-code.css -->
  </style>
</rui-code>
