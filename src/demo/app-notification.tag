import { domEvent, parentScope } from 'riot-mixin-pack'

<app-notification>
  <rui-header>Notifications</rui-header>
  <p>Notifications are easy to use. Simply add the <code>rui-notification-center</code> tag at the top of the page, or right under the <code>rui-nav</code> tag.</p>
  <rui-panel>
    <rui-panel-container>
      <rui-button option="primary" onclick={ showAlert.bind(this, 'primary', 'A primary alert') }>Primary</rui-button>
      <rui-button option="secondary" onclick={ showAlert.bind(this, 'secondary', 'A secondary alert') }>Secondary</rui-button>
      <rui-button option="success" onclick={ showAlert.bind(this, 'success', 'A success alert') }>Success</rui-button>
      <rui-button option="info" onclick={ showAlert.bind(this, 'info', 'An info alert') }>Info</rui-button>
      <rui-button option="warning" onclick={ showAlert.bind(this, 'warning', 'A warning alert') }>Warning</rui-button>
      <rui-button option="danger" onclick={ showAlert.bind(this, 'danger', 'A danger alert') }>Danger</rui-button>
    </rui-panel-container>
    <rui-panel-container>
      <rui-code>
        &lt;rui-notification-center /&gt;<br />
        <br />
        window.rui.alert('primary', 'Alert message here...');<br />
        window.rui.alert('secondary', 'Alert message here...');<br />
        window.rui.alert('success', 'Alert message here...');<br />
      </rui-code>
    </rui-panel-container>
  </rui-panel>

  <script>
    this.mixin(parentScope).mixin(domEvent);

    self.showAlert = function (option, message) {
      window.rui.alert(option, message || 'Test Alert');
    }
  </script>

</app-notification>
