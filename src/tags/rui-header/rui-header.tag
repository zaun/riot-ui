import { domEvent, parentScope } from 'riot-mixin-pack'
import ruiEventBusMixin from '../processed/rui-event-bus'
import ruiUtil from '../processed/rui-util'

<rui-header>
  <!-- @include rui-header.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent).mixin(ruiEventBusMixin).mixin(ruiUtil);
    <!-- @include rui-header.js -->
  </script>

  <style scoped>
    <!-- @include rui-header.css -->
  </style>
</rui-header>
