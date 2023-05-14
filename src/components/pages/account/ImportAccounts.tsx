import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNavLink,
  IonPage,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'

const ImportAccounts = ({ onDismiss }: { onDismiss: () => void }) => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Import Accounts</IonTitle>
          <IonButtons slot="start">
            <IonButton onClick={onDismiss}>Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              onClick={() => {
                // TODO: parse and save accounts

                onDismiss()
              }}
            >
              Done
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonTextarea
          // labelPlacement="floating"
          // label="Accounts"
          placeholder="2020-01-01 open Assets:Cash"
          helperText="It only process `open` directive."
          autoGrow={true}
        ></IonTextarea>
      </IonContent>
    </>
  )
}

export default ImportAccounts
