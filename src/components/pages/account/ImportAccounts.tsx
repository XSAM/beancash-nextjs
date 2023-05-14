import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonNavLink,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import React from 'react'

const ImportAccounts = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>Import Accounts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Page Two</h1>
      </IonContent>
    </>
  )
}

export default ImportAccounts
