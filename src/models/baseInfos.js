import mongoose from "mongoose"

const baseInfoSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  id: { type: String, required: true },
  title: { type: String },
  page: { type: Number },
}, { versionKey: false })

const baseInfo = mongoose.model("base_infos", baseInfoSchema)

export default baseInfo