import { Redirect, Route } from 'react-router-dom'
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonNav,
  IonPage,
  IonRoute,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
} from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { ellipse, square, receipt, fileTray } from 'ionicons/icons'
import TransactionTab from './pages/TransactionTab'
import AccountTab from './pages/AccountTab'
import SettingTab from './pages/SettingTab'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/display.css'
import Example from '@/components/pages/example'

setupIonicReact()

const App = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Redirect path="/" to="/transaction"/>

          <Route exact path="/transaction" component={TransactionTab} />

          <Route exact path="/account" component={AccountTab} />
          <Route exact path="/account/:id" component={Example} />
          <Route exact path="/accountPicker" component={Example} />

          <Route exact path="/setting" component={SettingTab} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="tab2" href="/account">
            <IonIcon aria-hidden="true" icon={fileTray} />
            <IonLabel>Account</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/transaction">
            <IonIcon aria-hidden="true" icon={receipt} />
            <IonLabel>Transaction</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/setting">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Setting</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
)

export default App
