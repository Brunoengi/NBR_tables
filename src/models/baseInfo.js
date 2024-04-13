import mongoose from "mongoose"

const baseInfoSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  id: { type: String, required: true },
  title: { type: String, required: true },
  page: { type: Number, required: true },
})

const baseInfo = mongoose.model(baseInfo, baseInfoSchema)

export default baseInfo