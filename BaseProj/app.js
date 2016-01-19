var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//------------------------------------------------引入控制器文件-----------------------------------------------
var routes = require('./controller/index');
var users = require('./controller/UserController');
//路由接口
app.use('/', routes);
app.use('/getUsers', users.getUsers);
//------------------------------------------------引入控制器文件-----------------------------------------------

// catch 404 and forward to error handler
//错误处理，错误接口
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  //res.render('error', {
  //  message: err.message,
  //  error: {}
  //});
  //接口请求错误的，返回错误信息
  res.send({"error":err.message});
});


module.exports = app;
