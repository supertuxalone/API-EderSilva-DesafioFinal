const mysql = require('mysql2')

const conection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Tel#452567',
    database: 'dashboard-ford-api'
})

module.exports = conection