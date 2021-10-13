const express = require("express")
const routes = express.Router()
const controller = require("./controllers/controller")



//routes.get('/mensagem',controller.simpleMessage)
routes.post('/agendar',controller.agendar)
routes.get('/verificar',controller.verificar)



module.exports = routes