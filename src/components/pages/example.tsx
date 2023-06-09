import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonModal, IonNavLink,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import React, { useRef, useState } from 'react'
import { OverlayEventDetail } from '@ionic/core'

const Example = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>

          {/*<IonButtons slot="start">*/}
          {/*  <IonNavLink routerDirection="back">*/}
          {/*    <IonButton>Pop</IonButton>*/}
          {/*  </IonNavLink>*/}
          {/*</IonButtons>*/}

          <IonTitle>Example</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <h1>Example</h1>
      </IonContent>
    </IonPage>
  )
}

export default Example
