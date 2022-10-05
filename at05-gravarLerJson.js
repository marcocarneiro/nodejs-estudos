const express = require('express')
const app = express()
const rwJSON = require('rwJSON')
const path = require('path')
const baseDir = path.dirname(__dirname, 'templates')
var porta = '3200'
var arquivo = 'pets.json'

//converte dados da requisição para JSON 
app.use(express.urlencoded({entended: true}))
app.use(express.json)

app.get('/', (req, res) => res.sendFile(`${baseDir}/index.html`))
app.get('/cadastrar', (req, res) => res.sendFile(`${baseDir}/cadastrar.html`))

app.get('/registros', (req, res) => {
    let dados = rwJSON.lerJSON(arquivo)
    dados = rwJSON.converterJSON_Objs(dados)
    //resposta
    res.json(dados)
})

