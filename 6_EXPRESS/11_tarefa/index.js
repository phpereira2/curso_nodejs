const express = require('express')
const app = express()
const port = 5000 // variavel ambiente

const path = require('path') // core module

const examples = require('./examples')

// ler o body
app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/examples', examples)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.use(function(req, res, next) {
    res.status(404).sendFile(`${basePath}/404.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`)
})