import express  from 'express';
import {agregarUsuario, obtenerUsuario } from './src/connection.js';
let todos


const app = express()

app.listen('8000', function(){
    console.log('Aplicacion iniciada en el puerto 8000')
})

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.static('./views'))
app.use(express.static('./src'))
app.use(express.static('./css'))

app.get('/', function(req, res){
    todos = obtenerUsuario()
    res.render('index', {usuarios:todos})
})
app.get('/agregar/:nombre/:apellido/:email/:password', function(req, res){
    let nombre = req.params.nombre
    let apellido = req.params.apellido
    let email = req.params.email
    let password = req.params.password
    agregarUsuario(nombre, apellido, email, password)
    res.redirect('/')
    console.log(nombre, apellido, email, password)
})