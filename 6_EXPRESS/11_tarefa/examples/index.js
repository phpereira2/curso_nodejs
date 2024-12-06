const express = require('express')
const router = express.Router()

const path = require('path')
const basePath = path.join(__dirname, '../templates')

router.get('/example1', (req, res) => {
    res.sendFile(`${basePath}/example1.html`)
})

router.get('/example2', (req, res) => {
    res.sendFile(`${basePath}/example2.html`)
})

module.exports = router