//import express from '../node_modules/express'
/* const express = require('express')
var app = express()
var porta = '3200'

app.get('/', (req, res)=>{
    res.send('<h1>Olá mundo</h1>')
})

app.get('/cadastro', function(req, res){
    res.send('<h1>Página de cadastro</h1>')
})

app.listen(porta, ()=> {
    console.log(`Servidor rodando em: http://localhost:${porta}`)
}) */

const express = require('express')

var app = express()

var porta = '3200'

app.get('/', (req, res)=>{res.send('<h1>Pagina Inicial</h1>')})

app.get('/cadastro', (req, res)=>{res.send('<h1>Tela de cadastro</h1>')})

app.get('/usuario', (req, res)=>{res.send('<h1>Tela de uruário</h1>')})

app.get('/consulta', (req, res)=>{res.send('<h1>Tela de consulta</h1>')})

app.listen(porta, function(){console.log(`Servidor rodando em: http://localhost:${porta}`)})
