const express = require('express')
const router = express.Router()
const formidable = require('formidable')

router.get('/', (req, res) => {
    res.render('feedback')
})

module.exports = router