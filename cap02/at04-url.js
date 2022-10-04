const url = require('url')
let uri = 'https://www.google.com/search?q=node+js&rlz=1C1GCEA_enBR992BR992&oq=node+js&aqs=chrome..69i57j0i131i433i512l2j0i512l6.2051j0j15&sourceid=chrome&ie=UTF-8'
let partUrl = new url.URL(uri)

console.log('Domínio: ', partUrl.host)
console.log('Caminho ou rota: ', partUrl.pathname)
console.log('Query ou string: ', partUrl.search)
//console.log('Parâmetros: ', partUrl.searchParams)
console.log('Valor do parâmetro q: ', partUrl.searchParams.get('q'))
