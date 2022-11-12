const express = require('express');
const bodyParser =  require('body-parser');
const path = require('path');
const app = express();

const apiRoutes = require('./routes/api_routes');

app.set('view engine', 'ejs');
app.set('views', 'views');


app.use(apiRoutes);

app.listen(3000);