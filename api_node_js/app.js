var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors  = require('cors')
var indexRouter = require('./business/index');
var cargueArchivo = require('./business/controllers/cargueArchivo');
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./business/swagger/swagger.json');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
//Swagger
app.use('/api-docs', cors(), swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', indexRouter);
app.use('/cargue', cargueArchivo);
module.exports = app;
