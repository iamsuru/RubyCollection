const express = require('express')
const path = require('path')

const router = express.Router()

console.log(path.join(__dirname, '..', 'views', 'index.html'));


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html'))
})

module.exports = router