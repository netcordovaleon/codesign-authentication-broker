const express = require('express');
const bodyParser = require('body-parser');
const services = require('./routes')

const app = express();

app.use(bodyParser.urlencoded({ extended : false }));
app.use('/v1', services);
app.use('/', express.static(__dirname + '/public'));
app.listen(3000, function(){ console.log('El servidor se esta ejecutando'); })