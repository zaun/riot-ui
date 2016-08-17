import { domEvent, parentScope } from 'riot-mixin-pack'
<!-- import SyntaxHighlighter, {registerBrush} from 'syntaxhighlighter'; -->

<rui-code>
  <!-- @include rui-code.html -->

  <script>
    var self = this;
    self.mixin(parentScope).mixin(domEvent);
    <!-- @include rui-code.js -->
  </script>

  <style scoped>
    <!-- @include rui-code.css -->
  </style>
</rui-code>
