
const conection = require('../infraestrutura/conection')
const moment =  require('moment')

class Usuario {

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

    
	//INSERT INTO comment (comment_date,comment_text,photo_id,user_id) values (?,?,?, ?)
	addUser(cadUser, res){
		//const sql = 'INSERT INTO usuario SET ? ';
        const sql = 'INSERT INTO usuario (nome, email, senha, nome_completo) values (?,?,?,?)'; 

            conection.query(sql, [cadUser.nome, cadUser.email, cadUser.senha, cadUser.nome_completo],(erro, resultados) => {
                if(erro) {
                    res.status(400).json(erro)
                } else {
                    res.status(201).json(resultados)
                }
            })
    }

    alteraUser(id, valores, res) {
        if(valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }      
        const sql = 'UPDATE usuario SET ? WHERE id=?'

        conection.query(sql, [valores, id], (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({...valores, id})
            }
        })
    }
}
module.exports = new Usuario

