const express = require('express');

//connceting to database
require('./config/dbConnect');

const app = express();

app.use(express.json());

app.use('/products', require('./router/productRouter'));

app.listen(4000, () => console.log('server up and running!'));