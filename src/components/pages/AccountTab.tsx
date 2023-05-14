import {
  IonContent,
  IonHeader, IonItem,
  IonItemDivider,
  IonItemGroup, IonItemOption, IonItemOptions, IonItemSliding,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar
} from '@ionic/react'

const AccountTab = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent >
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
            <IonItem>
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
