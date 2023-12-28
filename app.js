const express = require('express');

const app = express();

const adminRouts = require("./routes/admin");

const shopRouts = require("./routes/shop")

const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({extended:false}));

app.use('/admin',adminRouts);
app.use(shopRouts);


app.use((req,res,next) => {
    res.status(404).send('<h1>page not found</h1>');
});

app.listen(3000);
