//CONFIGURAR QUALQUER ROTA
const telaCad = require('../models/cadastro')
const telaUser = require('../models/usuario')

//qual rota de requisição dos metodo GET, POST, PATCH, DELETE dever ser informados nesse arquivo 
module.exports = app => {
    //all DadosVeiculos
    app.get('/cadastro/', (req, res) => {
    telaCad.lista(res)  
    })

    //all usuario
    app.get('/usuario/', (req, res) => {
        telaUser.listaUser(res)  
    })


    //Usuario por id
    app.get('/usuario/:id', (req, res) => {
        const id = parseInt(req.params.id)
        telaUser.porId(id, res)  
    }) 

    //DadosVeci por id
    app.get('/cadastro/:id', (req, res) => {
        const id = parseInt(req.params.id)
        telaCad.porIdUser(id, res)  
    }) 
    
    //Update DadosVeiculo
    app.patch('/cadastro/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        telaCad.alteraDadosVeic(id, valores, res)
    })

    //Update Usuario
    app.patch('/usuario/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        telaUser.alteraUser(id, valores, res)
    })

    //adicionar um novo DadoVeiculo INSERT 
    app.post('/cadastro/', (req, res) => {
        const cadastro = req.body
        telaCad.add(cadastro, res)
    })

    //adicionar um novo Usuario INSERT
    app.post('/usuario/', (req, res) => {
        const cadUser = req.body
        telaUser.addUser(cadUser, res)
    })

}