import { domEvent, parentScope } from 'riot-mixin-pack'
import ruiEventBusMixin from '../processed/rui-event-bus'
import ruiUtil from '../processed/rui-util'

<rui-notification-center>
  <!-- @include rui-notification-center.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent).mixin(ruiEventBusMixin).mixin(ruiUtil);
    <!-- @include rui-notification-center.js -->
  </script>

  <style scoped>
    <!-- @include rui-notification-center.css -->
  </style>
</rui-notification-center>
