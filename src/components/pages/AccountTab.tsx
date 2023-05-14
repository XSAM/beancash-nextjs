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
  IonNavLink,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ImportAccounts from '@/components/pages/account/ImportAccounts'

const AccountTab = () => {
  return (
    <IonPage>
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
            <IonNavLink
              routerDirection="forward"
              component={() => <ImportAccounts />}
            >
              <IonButton>Import</IonButton>
            </IonNavLink>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
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
