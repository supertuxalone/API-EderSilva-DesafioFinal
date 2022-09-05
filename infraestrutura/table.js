class table_vehicle {
    //init() que iniciará nosso trabalho
    init(conection) {
        this.conection = conection

        //O init() deverá chamar a tabela, e este método por sua vez está sendo 
        //chamado dentro do index.js. Logo, digitaremos this com .criarCadastro()
        this.criarCadastro()
    }

    criarCadastro() {
        const sql_veiculo = `CREATE TABLE IF NOT EXISTS model_veiculo (id INTEGER PRIMARY KEY AUTO_INCREMENT, model TEXT DEFAULT ('') NOT NULL, volumetotal INTEGER, connected INTEGER, softwareUpdates INTEGER)`;
        const sql_model = `CREATE TABLE IF NOT EXISTS dados_veiculo (id INTEGER PRIMARY KEY AUTO_INCREMENT, vin TEXT DEFAULT ('') NOT NULL, odometro varchar(30) default ('') not null, tirePressure varchar(30) default ('') not null, status varchar(30) default ('') not null, batteryStatus varchar(30) default ('') not null, fuelLevel varchar(30) default ('') not null, lat varchar(30) default ('') not null, longi varchar(30) default ('') not null)`;
        const sql_user = `CREATE TABLE IF NOT EXISTS usuario (id INTEGER PRIMARY KEY AUTO_INCREMENT, nome VARCHAR(30) NOT NULL UNIQUE, email VARCHAR(255) NOT NULL, senha VARCHAR(255) NOT NULL, nome_completo VARCHAR(40) NOT NULL, data_cadastro TIMESTAMP DEFAULT current_timestamp)`;    

        this.conection.query(sql_veiculo, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Veiculo criada com sucesso')
            }
        })

        this.conection.query(sql_model, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Modelo de Veiculo criada com sucesso')
            }
        })

        this.conection.query(sql_user, erro => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela Usuario criada com sucesso')
            }
        })
    }
}

module.exports = new table_vehicle 