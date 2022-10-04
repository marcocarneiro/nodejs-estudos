const _ = require('lodash')

//finção gera números aleatórios
const randomNum = ()=> Math.trunc(Math.random()*100)

console.log(' --------- USANDO LODASH ----------- ')
let numRandoms = _.times(10, randomNum) //executa função X vezes (lodash)

console.log(numRandoms)
console.log(typeof(numRandoms))

console.log('Some dos elementos', numRandoms.reduce((s, acc)=> acc+=s)) //reduce, função nativa do JS
console.log(' -----  Soma de elementos usando LODASH ------ ')
console.log(_.sumBy(numRandoms))
