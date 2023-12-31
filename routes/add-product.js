

const express = require("express");

// const rootDir = require('../util/helper')
const productController = require('../controller/product')

const router = express.Router();

router.get('/add-product',productController.getAddproduct);

router.post('/add-product',productController.postAddproduct );


module.exports = router;