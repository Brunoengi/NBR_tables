import express from "express"
import BaseInfoController from "../controllers/baseInfoController.js"

const routes = express()

routes.get('/baseinfo', BaseInfoController.getAll)

export default routes