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
import React, { useContext } from 'react'
import * as Database from '../../database/Database'
import { useDB } from '@/components/database/Database'

const ImportAccounts = ({ onDismiss }: { onDismiss: () => void }) => {
  const db = useDB()

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
              onClick={async () => {
                // TODO: parse and save accounts

                // const db = await Database.get()

                await db?.accounts.upsert({
                  name: 'Assets:Cash',
                  category: 'Assets',
                })

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
