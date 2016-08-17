import { domEvent, parentScope } from 'riot-mixin-pack'
import ruiEventBusMixin from '../processed/rui-event-bus'
import ruiUtil from '../processed/rui-util'

<rui-video>
  <!-- @include rui-video.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent).mixin(ruiEventBusMixin).mixin(ruiUtil);
    <!-- @include rui-video.js -->
  </script>

  <style scoped>
    <!-- @include rui-video.css -->
  </style>
</rui-video>
