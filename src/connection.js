import mysql from 'mysql'
let todos

var conector = mysql.createConnection({ //Create connection
    host : "localhost",
    database : "jobcourses",
    user : "root",
    password : "" 
});

const conectar = () => {
    conector.connect(function(err){
        if(err) throw err
        console.log('conectado')
    })
}


const agregarUsuario = (nombre, apellido, email, password) => {
    const sql = `INSERT INTO user (name, last_name, email, password) VALUES ("${nombre}", "${apellido}", "${email}", "${password}")`
    conector.query(sql, function(err, result, field){
        if(err) throw err
        console.log(result)
    }) 
}

const obtenerUsuario = () => {
    const sql = 'SELECT * FROM user'
    conector.query(sql, function(err, result, field){
        todos = result
    })    
    return todos
} 


export {conectar, agregarUsuario, obtenerUsuario}