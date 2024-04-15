import { IModelField, IModelTemplate } from '../types/backend'

class ModelTemplate {

  constructor(
    private _model: IModelTemplate
  ){}

  get model() {
    return this._model
  } 

  getFieldKey(field: IModelField) {
    return field.key
  }

  getFieldType(field: IModelField) {
    return field.type
  }

  getFieldRequired(field: IModelField) {
    return field.required
  }

  generateScript(): string {

  const allScript = `new mongoose.Schema(
  {
  ${this.model.field.map(fieldModel => `${fieldModel.key}: { type: ${fieldModel.type}, required: ${fieldModel.required }
}`)}})`

  return allScript
  }
}

const teste = new ModelTemplate({
  field:[ {key:'teste', type:'string', required: true} ],
  config: {
    collectionName: 'collectionName'
  }
})

console.log(teste.generateScript())