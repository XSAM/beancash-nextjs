import {
  IonButton,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonModal,
  IonNav,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import { chevronUpCircle, colorPalette, document, globe } from 'ionicons/icons'
import ImportAccounts from '@/components/pages/account/ImportAccounts'
import React, { useCallback, useRef, useState } from 'react'
import CreateTransaction from '@/components/pages/transaction/CreateTransaction'

const TransactionTab = () => {
  const modal = useRef<HTMLIonModalElement>(null)
  const modalRoot = useCallback(
    () => <CreateTransaction
      onDismiss={() => {
        modal.current?.dismiss()
      }}
    />,
    []
  );

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal ref={modal} trigger="open-create-modal" >
          {/*<IonNav root={modalRoot} />*/}
          <CreateTransaction
            onDismiss={() => {
              modal.current?.dismiss()
            }}
          />
        </IonModal>

        <IonButton>Default</IonButton>
        <IonList>
          <IonItemSliding>
            <IonItem>
              <IonLabel>Sliding Item with End Options</IonLabel>
            </IonItem>

            <IonItemOptions>
              <IonItemOption>Favorite</IonItemOption>
              <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>

          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="success">Archive</IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Sliding Item with Start Options</IonLabel>
            </IonItem>
          </IonItemSliding>

          <IonItemSliding>
            <IonItemOptions side="start">
              <IonItemOption color="success">Archive</IonItemOption>
            </IonItemOptions>

            <IonItem>
              <IonLabel>Sliding Item with Options on Both Sides</IonLabel>
            </IonItem>

            <IonItemOptions side="end">
              <IonItemOption>Favorite</IonItemOption>
              <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>

        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton>
            <IonIcon icon={chevronUpCircle}></IonIcon>
          </IonFabButton>
          <IonFabList side="top">
            <IonFabButton id="open-create-modal">
              <IonIcon icon={document}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={colorPalette}></IonIcon>
            </IonFabButton>
            <IonFabButton>
              <IonIcon icon={globe}></IonIcon>
            </IonFabButton>
          </IonFabList>
        </IonFab>
      </IonContent>
    </IonPage>
  )
}

export default TransactionTab
