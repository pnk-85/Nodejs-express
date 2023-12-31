

const express = require("express");

// const rootDir = require('../util/helper')

const productController = require('../controller/product')

const router = express.Router();


router.get('/',productController.getProducts);


module.exports = router;