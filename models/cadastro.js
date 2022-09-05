
const conection = require('../infraestrutura/conection')
const moment =  require('moment')

class Cadastro {

    //metodo que lista todos os registro DADOS_VEICULOS cadastrados na tabela 
    lista(res){
        //const sql = 'SELECT dados_veiculo.*, model_veiculo.*, usuario.* FROM `dashboard-ford-api`.dados_veiculo dados_veiculo, `dashboard-ford-api`.model_veiculo model_veiculo, `dashboard-ford-api`.usuario usuario WHERE dados_veiculo.id = model_veiculo.id AND dados_veiculo.id = usuario.id'
        const sql = 'SELECT id, vin, odometro, tirePressure, status, batteryStatus, fuelLevel, lat, longi FROM `dashboard-ford-api`.dados_veiculo';


        conection.query(sql, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }            
        })        
    }
    //metodo que lista todos os registro de USUARIOS cadastrados na tabela usuario 
    listaUser(res){
        const sql = 'SELECT id, nome, email, senha, nome_completo, data_cadastro FROM `dashboard-ford-api`.usuario';
    
        conection.query(sql, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }            
        })        
    }    

    //busca por determinado id 
    porId(id, res){
        const sql = `SELECT * FROM dados_veiculo where id=${id}`	
    
        conection.query(sql, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }            
        })
    }

    alteraDadosVeic(id, valores, res) {
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }      
        const sql = 'UPDATE dados_veiculo SET ? WHERE id=?'

        conection.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }

    //busca por determinado id 
    porIdUser(id, res){
        const sql = `SELECT * FROM usuario where id=${id}`	
    
        conection.query(sql, (erro, resultados) =>{
            if(erro){
                res.status(400).json(erro)
            }else{
                res.status(200).json(resultados)
            }            
        })
    }

    add(cadastro, res){
        //const sql = 'INSERT INTO dados_veiculo SET ?'
		const sql = 'INSERT INTO `dashboard-ford-api`.dados_veiculo (vin, odometro, tirePressure, status, batteryStatus, fuelLevel, lat, longi) SET ?';

        //const sql = 'INSERT INTO dados_veiculo (vin, odometro, tirePressure, status, batteryStatus, fuelLevel, lat, longi) VALUES("$vin", "$odometro", "$tirePressure", "$status", "$batteryStatus", "$fuelLevel", "$lat", "$longi")';
        //const sql = 'insert into `dashboard-ford-api`.dados_veiculo (vin, odometro, tirePressure, status, batteryStatus,fuelLevel, lat,	longi)values("UHUHAGYGA8712","250000","35,25,21,20","off","ok","85","-12,2612","-35,1512")';

            conection.query(sql, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }
            })
    }
	
		//INSERT INTO comment (comment_date,comment_text,photo_id,user_id) values (?,?,?, ?)
	addUser(cadastro, res){
		const sql = 'INSERT INTO usuario set nome, email, senha, nome_completo ';

            conection.query(sql, (erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }
            })
    }
}
module.exports = new Cadastro

