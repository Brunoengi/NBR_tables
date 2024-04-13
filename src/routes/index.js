import express from "express"
import baseInfo from './baseInfos.js'

const routes = app => {
  app.route('/').get((req, res) => res.status(200).send("API to create NBR JSON"))
  app.use(express.json(), baseInfo)
}

export default routes