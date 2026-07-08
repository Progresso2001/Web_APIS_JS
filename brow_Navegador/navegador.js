//No navegador
fetch("https://jsonplaceholder.typicode.com/data")
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado').innerHTML = data.conteudo
    })

//No node.js -> usando file system e http
const fs = require('fs')
const http = require('http')
http.createServer((req, res)=>{
    fs.readFile('index.html', (err, data)=>{
        res.writeHead(200)
        res.end(data)
    })
}).listen(3000)

