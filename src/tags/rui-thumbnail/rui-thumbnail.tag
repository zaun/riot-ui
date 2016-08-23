import { domEvent, parentScope } from 'riot-mixin-pack'
import ruiEventBusMixin from '../processed/rui-event-bus'
import ruiUtil from '../processed/rui-util'

<rui-thumbnail>
  <!-- @include rui-thumbnail.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent).mixin(ruiEventBusMixin).mixin(ruiUtil);
    <!-- @include rui-thumbnail.js -->
  </script>

  <style scoped>
    <!-- @include rui-thumbnail.css -->
  </style>
</rui-thumbnail>
