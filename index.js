
//SUBIR NO AR
const customExpress = require('./config/customExpress')

const conection = require('./infraestrutura/conection')
const table = require('./infraestrutura/table')

conection.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        table.init(conection)

        const app = customExpress()

        app.listen(3000, () => console.log('servidor rodando na porta 3000'))
    }
})