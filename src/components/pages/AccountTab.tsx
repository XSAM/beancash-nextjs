import {
  ActionSheetButton,
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
  IonModal,
  IonNavLink,
  IonPage,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ImportAccounts from '@/components/pages/account/ImportAccounts'
import React, { useEffect, useRef, useState } from 'react'
import { OverlayEventDetail } from '@ionic/core'
import Example from '@/components/pages/example'
import { Route } from 'react-router-dom'
import { IonRouter } from '@ionic/core/components/ion-router'
import { AccountDocument } from '@/components/database/schemas/Account'
import { useDB } from '@/components/database/Database'

const AccountTab = () => {
  const db = useDB()
  const modal = useRef<HTMLIonModalElement>(null)
  const [accounts, setAccounts] = useState<AccountDocument[]>([])

  const accountCategories = [
    'Assets',
    'Equity',
    'Expenses',
    'Income',
    'Liabilities',
  ]

  useEffect(() => {
    db?.accounts
      .find({
        sort: [{ name: 'asc' }],
      })
      .$.subscribe((accounts) => {
        setAccounts(accounts)
      })
  }, [db])

  const categoryItemsGroup = (category: string) => {
    return (
      <IonItemGroup key={category}>
        <IonItemDivider>
          <IonLabel>{category}</IonLabel>
        </IonItemDivider>

        {accounts
          .filter((x) => x.category === category)
          .map((x) => {
            return (
              <IonItemSliding key={x.name}>
                <IonItem routerLink={'/account/test'}>
                  <IonLabel>{x.name}</IonLabel>
                </IonItem>

                <IonItemOptions>
                  <IonItemOption color="danger">Delete</IonItemOption>
                </IonItemOptions>
              </IonItemSliding>
            )
          })}
      </IonItemGroup>
    )
  }

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
            header="Clear Accounts"
            buttons={accountCategories
              .map((x) => {
                return {
                  text: x,
                  role: 'destructive',
                  data: {
                    action: 'delete',
                    category: x,
                  },
                } as ActionSheetButton
              })
              .concat([
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
              ])}
            onWillDismiss={(e) => {
              if (e.detail.data === undefined) {
                return
              }
              if (e.detail.data.action === 'delete') {
                if (e.detail.data.category !== undefined) {
                  db?.accounts
                    .find({ selector: { category: e.detail.data.category } })
                    .remove()
                } else {
                  db?.accounts.find().remove()
                }
              }
            }}
          ></IonActionSheet>

          <IonButtons slot="end">
            <IonButton id="open-import-modal">Import</IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal ref={modal} trigger="open-import-modal">
          <ImportAccounts
            onDismiss={() => {
              modal.current?.dismiss()
            }}
          />
        </IonModal>

        {accountCategories.map(categoryItemsGroup)}
      </IonContent>
    </IonPage>
  )
}

export default AccountTab
