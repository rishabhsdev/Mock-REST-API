const express = require('express');
const bodyParser =  require('body-parser');
const path = require('path');
const app = express();

const apiRoutes = require('./routes/api_routes');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

app.use(apiRoutes);

app.listen(3000);
