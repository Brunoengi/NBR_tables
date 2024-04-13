import mongoose from "mongoose"

const baseInfoSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  page: { type: Number, required: true },
}, { versionKey: false })

const baseInfo = mongoose.model("base_infos", baseInfoSchema)

export default baseInfo