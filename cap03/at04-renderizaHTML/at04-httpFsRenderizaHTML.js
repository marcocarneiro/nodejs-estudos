const http = require('http')
const url = require('url')
const fs = require('fs')
const porta = 3200

const server = http.createServer((req, res) => {
    const q = url.parse(req.url, true)
    // retorna string após / da URL
    let pagina = q.pathname.substring(1)
    //if ternário (url inicial é index.html)
    pagina = pagina==''? 'index.html' : pagina

    //if ternário insere extensão HTML caso não for especificado
    pagina = !pagina.includes('.html')? pagina+'.html' : pagina
    console.log(pagina)

    pagina = fs.existsSync(pagina)? pagina : '404.html'
    fs.readFile(pagina, (err, data)=> {
        res.writeHead(200, {'Content-Type' : 'text-html'})
        res.write(data)
        return res.end()
    })
})

server.listen(porta, ()=> console.log(`Servidor rodando em: http://localhost:${porta}`))

