import baseInfos from "../models/baseInfos.js";

class BaseInfosController {

  static async getAll(req, res) {
    try {
      const listBaseInfo = await baseInfos.find({})
      res.status(200).json(listBaseInfo)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }

  static async create(req, res) {
      const newBasicInfo = req.body
      try {
      const createBasicInfo = await baseInfos.create(newBasicInfo)
      res.status(201).json( {message: "Successful Create", data: createBasicInfo })
    } catch(error) {
      res.status(500).json({ message: `Error to create, ${error.message}` })
    }
  }
  static async completeUpdate(req, res) {
    try {
      const id = req.params.id
      await baseInfos.findByIdAndUpdate(id, req.body)
      res.status(200).json( {message: "Successful baseInfo update"} )
    }catch (error){
      res.status(500).json( {message:error.message })
    }
  }
}

export default BaseInfosController