import { IModelField, IModelTemplate } from '../types/backend'

class ModelTemplate {

  constructor(
    private _model: IModelTemplate
  ){}

  get model() {
    return this._model
  } 

  generateScript(): string {

  const allScript = `new mongoose.Schema(
  {
  ${this.model.field.map(
    fieldModel => ` ${fieldModel.key}: { type: ${fieldModel.type}, required: ${fieldModel.required }
  }`
)}})

  export default mongoose.model("${this.model.config.collectionName}", "${this.model.config.collectionName}Schema")
`

  

  return allScript
  }
}

const teste = new ModelTemplate({
  field:[ 
    {key:'nome', type:'string', required: true},
    {key:'idade', type:'int', required: true},
    {key:'sexo', type:'string', required: true},
  ],
  config: {
    collectionName: 'collectionName'
  }
})

console.log(teste.generateScript())