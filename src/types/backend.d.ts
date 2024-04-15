export type IModelTemplate = {
  field: IModelField[]
  config: {
    collectionName: string
  }
}

export type IModelField = {
  key: string,
  type: string,
  required?: boolean
}