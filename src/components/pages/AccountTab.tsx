import {
  IonActionSheet,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonModal,
  IonNavLink,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ImportAccounts from '@/components/pages/account/ImportAccounts'
import { useRef } from 'react'
import { OverlayEventDetail } from '@ionic/core'
import Example from '@/components/pages/example'
import { Route } from 'react-router-dom'
import { IonRouter } from '@ionic/core/components/ion-router'

const AccountTab = () => {
  const modal = useRef<HTMLIonModalElement>(null)

  function onWillDismiss(ev: CustomEvent<OverlayEventDetail>) {
    if (ev.detail.role === 'confirm') {
      // setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  return (
    <IonPage>
      <IonRouterOutlet></IonRouterOutlet>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Account</IonTitle>
          <IonButtons id="open-clear-sheet" slot="start">
            <IonButton>Clear</IonButton>
          </IonButtons>
          <IonActionSheet
            trigger="open-clear-sheet"
            header="Actions"
            buttons={[
              {
                text: 'Delete All',
                role: 'destructive',
                data: {
                  action: 'delete',
                },
              },
              {
                text: 'Cancel',
                role: 'cancel',
                data: {
                  action: 'cancel',
                },
              },
            ]}
          ></IonActionSheet>

          <IonButtons slot="end">
            <IonButton id="open-import-modal">Import</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal
          ref={modal}
          trigger="open-import-modal"
          onWillDismiss={(ev) => onWillDismiss(ev)}
        >
          <ImportAccounts
            onDismiss={() => {
              modal.current?.dismiss()
            }}
          />
        </IonModal>
        {/*<div*/}
        {/*  style={{*/}
        {/*    display: 'flex',*/}
        {/*    alignItems: 'center',*/}
        {/*    justifyContent: 'center',*/}
        {/*    height: '100%'*/}
        {/*  }}*/}
        {/*>*/}
        {/*  Listen now content*/}
        {/*</div>*/}
        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Assets</IonLabel>
          </IonItemDivider>

          <IonItemSliding>
            <IonItem routerLink={'/account/test'}>
              <IonLabel>Sliding Item with End Options</IonLabel>
            </IonItem>

            <IonItemOptions>
              <IonItemOption>Favorite</IonItemOption>
              <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
          <IonItem>
            <IonLabel>Argentina</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Armenia</IonLabel>
          </IonItem>
        </IonItemGroup>

        <IonItemGroup>
          <IonItemDivider>
            <IonLabel>Equity</IonLabel>
          </IonItemDivider>

          <IonItem>
            <IonLabel>Bangladesh</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>Belarus</IonLabel>
          </IonItem>
          <IonItem lines="none">
            <IonLabel>Belgium</IonLabel>
          </IonItem>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  )
}

export default AccountTab
