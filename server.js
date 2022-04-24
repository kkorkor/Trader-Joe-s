const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({ path: './.env'});

const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));


// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.set('view engine', 'hbs');


app.use('/', require('./routes/pages'));
app.use('/products', require('./routes/products'));
app.use('/checkout', require('./routes/checkout'));

app.listen(4000, () => {
    console.log("Server is running on port 4000");
  })