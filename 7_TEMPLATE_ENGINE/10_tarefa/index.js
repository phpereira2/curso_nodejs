const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.get('/products/camisetabasica', (req, res) => {
    res.render('camisetabasica')
})

app.get('/products/camisetapolo', (req, res) => {
    res.render('camisetapolo')
})

app.get('/products/calcajeans', (req, res) => {
    res.render('calcajeans')
})

app.get('/products/calcaskinny', (req, res) => {
    res.render('calcaskinny')
})

app.get('/', (req, res) => {
    const products = [
        {
            id: '01',
            category: 't-shirt',
            name: 'Camiseta Básica',
            price: 20,
            link: '/products/camisetabasica'
        },
        {
            id: '02',
            category: 't-shirt',
            name: 'Camiseta Polo',
            price: 30,
            link: '/products/camisetapolo'
        },
        {
            id: '03',
            category: 'pants',
            name: 'Calça Jeans',
            price: 60,
            link: '/products/calcajeans'
        },
        {
            id: '04',
            category: 'pants',
            name: 'Calça Skinny',
            price: 80,
            link: '/products/calcaskinny'
        }
    ]

    res.render('home', {products})
})

app.listen(3000, () => {
    console.log('App rodando na porta 3000')
})