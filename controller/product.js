const path = require('path');

exports.getAddproduct = (req, res) => {
    res.sendFile(path.join(__dirname,'../', 'views', 'add-product.html'))
};

exports.postAddproduct = (req,res)=> {
    console.log(req.body);
    res.redirect('/');
};

exports.getProducts = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../', 'views','shop.html'))
};

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views', 'contact.html'))
};

exports.getSuccess = (req, res, next) => {
    res.sendFile(path.join(__dirname,'../','views', 'success.html'))
};

