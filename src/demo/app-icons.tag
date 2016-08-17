import { domEvent, parentScope } from 'riot-mixin-pack'

<app-icons>
  <rui-header>Emoji</rui-header>
  <p>The emoji tag is about 36kb in size and is used to create all the icons
  shown below. The icons are directly sized by the <code>font-size</code> of
  its container.</p>
  <rui-panel>
    <rui-panel-container class="icons">
      <rui-emoji name="grinning" />
      <rui-emoji name="grimacing" />
      <rui-emoji name="grin" />
      <rui-emoji name="joy" />
      <rui-emoji name="smiley" />
      <rui-emoji name="smile" />
      <rui-emoji name="sweat_smile" />
      <rui-emoji name="laughing" />
      <rui-emoji name="innocent" />
      <rui-emoji name="wink" />
      <rui-emoji name="blush" />
      <rui-emoji name="slight_smile" />
      <rui-emoji name="upside_down" />
      <rui-emoji name="relaxed" />
      <rui-emoji name="yum" />
      <rui-emoji name="relieved" />
      <rui-emoji name="heart_eyes" />
      <rui-emoji name="kissing_heart" />
      <rui-emoji name="kissing" />
      <rui-emoji name="kissing_smiling_eyes" />
      <rui-emoji name="kissing_closed_eyes" />
      <rui-emoji name="stuck_out_tongue_winking_eye" />
      <rui-emoji name="stuck_out_tongue_closed_eyes" />
      <rui-emoji name="stuck_out_tongue" />
      <rui-emoji name="money_mouth" />
      <rui-emoji name="nerd" />
      <rui-emoji name="sunglasses" />
      <rui-emoji name="hugging" />
      <rui-emoji name="smirk" />
      <rui-emoji name="no_mouth" />
      <rui-emoji name="neutral_face" />
      <rui-emoji name="expressionless" />
      <rui-emoji name="unamused" />
      <rui-emoji name="rolling_eyes" />
      <rui-emoji name="thinking" />
      <rui-emoji name="flushed" />
      <rui-emoji name="disappointed" />
      <rui-emoji name="worried" />
      <rui-emoji name="angry" />
      <rui-emoji name="rage" />
      <rui-emoji name="pensive" />
      <rui-emoji name="confused" />
      <rui-emoji name="slight_frown" />
      <rui-emoji name="frowning2" />
      <rui-emoji name="persevere" />
      <rui-emoji name="confounded" />
      <rui-emoji name="tired_face" />
      <rui-emoji name="weary" />
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-emoji name="grinning" /&gt;
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    this.mixin(parentScope).mixin(domEvent);
  </script>

</app-icons>
