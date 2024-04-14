import express from "express"
import BaseInfosController from "../controllers/baseInfoController.js"

const routes = express()

routes.get('/baseinfos', BaseInfosController.getAll)
routes.post('/baseinfos', BaseInfosController.create)
routes.put('/baseinfos/:id',BaseInfosController.completeUpdate)

export default routes