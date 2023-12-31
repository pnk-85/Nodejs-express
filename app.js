const path = require('path')

const express = require('express');
const bodyparser = require("body-parser");
const app = express();

const addproductRouts = require("./routes/add-product");
const shopRouts = require("./routes/shop")
const contactRouts = require('./routes/Contact');
const successRoutes = require('./routes/success');

app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',addproductRouts);
app.use(shopRouts);
app.use(contactRouts);
app.use(successRoutes)


app.use((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
});

app.listen(3000);
