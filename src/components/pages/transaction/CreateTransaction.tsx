import { useDB } from '@/components/database/Database'
import React, { useRef, useState } from 'react'
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem, IonItemDivider,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList, IonModal,
  IonNav,
  IonNavLink,
  IonPage,
  IonRow,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/react'
import Example from '@/components/pages/example'
import Item from '@/components/types'
import AppTypeahead from '@/components/AppTypeahead'

const fruits: Item[] = [
  { text: 'Apple', value: 'apple' },
  { text: 'Apricot', value: 'apricot' },
  { text: 'Banana', value: 'banana' },
  { text: 'Blackberry', value: 'blackberry' },
  { text: 'Blueberry', value: 'blueberry' },
  { text: 'Cherry', value: 'cherry' },
  { text: 'Cranberry', value: 'cranberry' },
  { text: 'Grape', value: 'grape' },
  { text: 'Grapefruit', value: 'grapefruit' },
  { text: 'Guava', value: 'guava' },
  { text: 'Jackfruit', value: 'jackfruit' },
  { text: 'Lime', value: 'lime' },
  { text: 'Mango', value: 'mango' },
  { text: 'Nectarine', value: 'nectarine' },
  { text: 'Orange', value: 'orange' },
  { text: 'Papaya', value: 'papaya' },
  { text: 'Passionfruit', value: 'passionfruit' },
  { text: 'Peach', value: 'peach' },
  { text: 'Pear', value: 'pear' },
  { text: 'Plantain', value: 'plantain' },
  { text: 'Plum', value: 'plum' },
  { text: 'Pineapple', value: 'pineapple' },
  { text: 'Pomegranate', value: 'pomegranate' },
  { text: 'Raspberry', value: 'raspberry' },
  { text: 'Strawberry', value: 'strawberry' },
];

const CreateTransaction = ({ onDismiss }: { onDismiss: () => void }) => {
  const db = useDB()

  const input = useRef<HTMLIonTextareaElement>(null)

  const [selectedFruitsText, setSelectedFruitsText] = useState<string>('0 Items');
  const [selectedFruits, setSelectedFruits] = useState<string[]>([]);

  const modal = useRef<HTMLIonModalElement>(null);

  const formatData = (data: string[]) => {
    if (data.length === 1) {
      const fruit = fruits.find((fruit) => fruit.value === data[0])!;
      return fruit.text;
    }

    return `${data.length} items`;
  };

  const fruitSelectionChanged = (fruits: string[]) => {
    setSelectedFruits(fruits);
    setSelectedFruitsText(formatData(fruits));
    modal.current?.dismiss();
  };

  return (
    <>
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
                    <IonItem button={true} detail={false} id="select-fruits">
                      <IonLabel>Favorite Fruits</IonLabel>
                      <div slot="end" id="selected-fruits">
                        {selectedFruitsText}
                      </div>
                    </IonItem>
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

      <IonModal trigger="select-fruits" ref={modal}>
        <AppTypeahead
          title="Favorite Fruits"
          items={fruits}
          selectedItems={selectedFruits}
          onSelectionCancel={() => modal.current?.dismiss()}
          onSelectionChange={fruitSelectionChanged}
        />
      </IonModal>
    </>
  )
}

export default CreateTransaction
