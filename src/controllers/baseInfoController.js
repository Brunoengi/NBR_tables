import baseInfo from "../models/baseInfos.js";

class BaseInfoController {

  static async getAll(req, res) {
    try {
      const listBaseInfo = await baseInfo.find({})
      res.status(200).json(listBaseInfo)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  }
}

export default BaseInfoController