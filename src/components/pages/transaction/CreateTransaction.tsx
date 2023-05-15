import { useDB } from '@/components/database/Database'
import React, { useRef } from 'react'
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonNav,
  IonNavLink,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import Example from '@/components/pages/example'

const CreateTransaction = ({ onDismiss }: { onDismiss: () => void }) => {
  const db = useDB()

  const input = useRef<HTMLIonTextareaElement>(null)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Create Transaction</IonTitle>
          <IonButtons slot="start">
            <IonButton onClick={onDismiss}>Cancel</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton
              onClick={() => {
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

        <IonList inset={true}>
          <IonItemSliding>
            <IonItem>
              {/*<IonLabel>Foo</IonLabel>*/}
              <IonGrid>
                <IonRow>
                  <IonCol>
                    <IonNavLink
                      routerDirection="forward"
                      component={() => <Example />}
                    >
                      <IonButton>Go to Page Two</IonButton>
                    </IonNavLink>
                    {/*<IonItem detail={false} routerLink={'/accountPicker'}>*/}
                    {/*  <IonLabel>foo</IonLabel>*/}
                    {/*</IonItem>*/}
                  </IonCol>
                  <IonCol>
                    <IonInput
                      type="number"
                      inputmode="decimal"
                      value="0.0"
                    ></IonInput>
                  </IonCol>
                  <IonCol size="3">
                    <IonSelect
                      aria-label="currencry"
                      justify="end"
                      value={'USD'}
                      class={'bg-slate-50'}
                    >
                      <IonSelectOption value="USD">USD</IonSelectOption>
                      <IonSelectOption value="CNY">CNY</IonSelectOption>
                      <IonSelectOption value="bananas">Bananas</IonSelectOption>
                    </IonSelect>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonItem>

            <IonItemOptions>
              <IonItemOption color="danger">Delete</IonItemOption>
            </IonItemOptions>
          </IonItemSliding>
        </IonList>
      </IonContent>
    </IonPage>
  )
}

export default CreateTransaction
