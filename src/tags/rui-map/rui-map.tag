import { domEvent, parentScope } from 'riot-mixin-pack'
import ruiEventBusMixin from '../processed/rui-event-bus'
import ruiUtil from '../processed/rui-util'

<rui-map>
  <!-- @include rui-map.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent).mixin(ruiEventBusMixin).mixin(ruiUtil);
    <!-- @include rui-map.js -->
  </script>

  <style scoped>
    <!-- @include rui-map.css -->
  </style>
</rui-map>
