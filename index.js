const express = require('express'),
    port = process.env.PORT || 3000;

//setup app & its routes
const app = express();
const routes = require('./src/routes/index.route');
app.use(routes);

//start http server
app.listen(port);