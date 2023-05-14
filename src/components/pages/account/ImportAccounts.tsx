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
import React, { useRef } from 'react'
import { useDB } from '@/components/database/Database'
import { AccountDocument } from '@/components/database/schemas/Account'

const ImportAccounts = ({ onDismiss }: { onDismiss: () => void }) => {
  const db = useDB()

  const input = useRef<HTMLIonTextareaElement>(null)

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
                const value = input.current?.value || ''
                if (value !== '') {
                  const accounts = parseAccountsText(value)
                  await db?.accounts.bulkUpsert(accounts)
                }

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
          ref={input}
          placeholder="2020-01-01 open Assets:Cash"
          helperText="It only process `open` directive."
          autoGrow={true}
        ></IonTextarea>
      </IonContent>
    </>
  )
}

export default ImportAccounts

const parseAccountsText = (text: string) => {
  return text
    .split('\n')
    .map(parseAccountLine)
    .filter((x): x is AccountDocument => x !== null)
}

const parseAccountLine = (line: string) => {
  const slice = line.split(' ')
  if (slice.length < 3) {
    return null
  }
  if (slice[1] !== 'open') {
    return null
  }

  return {
    name: slice[2],
    category: slice[2].split(':')[0],
  } as AccountDocument
}
