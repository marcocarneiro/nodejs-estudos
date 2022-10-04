const path = require('path')
let arquivo = './at01-olamundo3.js'

console.log('Extensão: ', path.extname(arquivo))
console.log('Nome completo: ', path.basename(arquivo))
console.log('Unidade base: ', path.dirname(arquivo))
console.log('Nome absolute: ', path.resolve(arquivo))