const express = require('express');

// const rootDir = require('../util/helper')
const productController = require('../controller/product');

const router = express.Router();

//creating a middleware
router.get('/success',productController.getSuccess);

module.exports = router;