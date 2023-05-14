import {
  toTypedRxJsonSchema,
  ExtractDocumentTypeFromTypedRxJsonSchema,
  RxJsonSchema,
  RxDocument,
  RxCollection,
} from 'rxdb'

export const accountLiteral = {
  title: 'account schema',
  // description: 'describes a simple hero',
  version: 0,
  primaryKey: 'name',
  type: 'object',
  properties: {
    name: {
      type: 'string',
      maxLength: 100,
    },
    category: {
      type: 'string',
    },
  },
  required: ['name', 'category'],
  indexes: ['category'],
} as const

const schemaTyped = toTypedRxJsonSchema(accountLiteral)

// aggregate the document type from the schema
export type AccountDocType = ExtractDocumentTypeFromTypedRxJsonSchema<
  typeof schemaTyped
>

// create the typed RxJsonSchema from the literal typed object.
export const accountSchema: RxJsonSchema<AccountDocType> = accountLiteral

export type AccountDocument = RxDocument<
  AccountDocType,
  AccountCollectionMethods
>

// we declare one static ORM-method for the collection
export type AccountCollectionMethods = {
  countAllDocuments: () => Promise<number>
  // listByCategory: (category: String) => Promise<AccountDocument[]>
}

// and then merge all our types
export type AccountCollection = RxCollection<
  AccountDocType,
  AccountCollectionMethods
>

export const accountCollectionMethods: AccountCollectionMethods = {
  countAllDocuments: async function (this: AccountCollection) {
    const allDocs = await this.find().exec()
    return allDocs.length
  },
}
