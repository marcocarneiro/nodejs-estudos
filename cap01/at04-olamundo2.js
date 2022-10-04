//require faz a importação de módulos
//require é um módulo nativo
const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

console.log('Olá mundo')
rl.question('Qual o seu nome?', nome=> {
    console.log(`Olá ${nome}!`)   
    rl.close() 
})
//rl.close()

console.log('Olá Node')