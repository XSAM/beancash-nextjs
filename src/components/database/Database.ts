import { createRxDatabase, addRxPlugin, RxDatabase } from 'rxdb'
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'
import { accountCollectionMethods, accountSchema } from './schemas/Account'

import { RxDBLeaderElectionPlugin } from 'rxdb/plugins/leader-election'
import { AccountCollection } from '@/components/database/schemas/Account'
import { createContext, useEffect, useState } from 'react'

addRxPlugin(RxDBLeaderElectionPlugin)

let dbPromise: Promise<BeancashDatabase> | null = null

export type BeancashDatabaseCollections = {
  accounts: AccountCollection
}

export type BeancashDatabase = RxDatabase<BeancashDatabaseCollections>

const _create = async () => {
  console.log('DatabaseService: creating database..')
  const db: BeancashDatabase =
    await createRxDatabase<BeancashDatabaseCollections>({
      name: 'beancashdb',
      storage: getRxStorageDexie(),
    })
  console.log('DatabaseService: created database')
  // @ts-ignore
  window['db'] = db // write to window for debugging

  // show leadership in title
  db.waitForLeadership().then(() => {
    console.log('isLeader now')
    document.title = '♛ ' + document.title
  })

  // create collections
  console.log('DatabaseService: create collections')
  await db.addCollections({
    accounts: {
      schema: accountSchema,
      statics: accountCollectionMethods,
    },
  })

  // hooks
  console.log('DatabaseService: add hooks')
  db.accounts.postInsert(
    function myPostInsertHook(doc) {
      console.log('inserted account: ' + doc.name)
    },
    false // not async
  )

  return db
}

export const get = (): Promise<BeancashDatabase> => {
  if (!dbPromise) dbPromise = _create()
  return dbPromise
}

export function useDB() {
  const [db, setDB] = useState<BeancashDatabase | null>(null)
  useEffect(() => {
    get().then((db) => setDB(db))
  }, [])
  return db
}
