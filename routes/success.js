const express = require('express');
const path = require('path')
// const rootDir = require('../util/helper')
const router = express.Router();

//creating a middleware
router.get('/success',(req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views', 'success.html'))
})

module.exports = router;