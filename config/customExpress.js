//CONFIGURAR QUALQUER COISA

const express = require('express')
//agrupar todas as rotas que formos criando dentro do app
const consign = require('consign')
//justamente converter as requisições para algo que seja legível no JavaScript
const bodyParser = require('body-parser')
const middleware = require('middleware')

module.exports = () => {
 const app = express()

 //APLICAÇÃO PEGA QUALQUER TIPO INFORMAÇÃO QUE VENHA DO POST
 app.use(express.urlencoded({ extended: true }))
 app.use(express.json())

 consign()
   .include('controllers')
   .into(app)

 return app
}
