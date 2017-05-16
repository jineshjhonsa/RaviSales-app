var express = require('express');
var path = require('path');

var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var passport = require('passport');
require('./models/models.js');



//var index = require('./routes/index');
//var authenticate = require('./routes/authenticate')(passport);
var mongoose = require('mongoose');
/*var env = process.env.NODE_ENV = process.env.NODE_ENV || 'dev'

if(env==='dev') {
    mongoose.connect('mongodb://localhost:27017/chirpit');
}
else
{*/
    //
   mongoose.connect('mongodb://chatme:chatme@ds145325.mlab.com:45325/chirpit');
//}

//
   //mongoose.connect('mongodb://localhost:27017/chirpit');




var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//// Initialize Passport
//var initPassport = require('./passport-init');
//initPassport(passport);

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));

app.use(logger('dev'));
app.use(session({
  secret: 'keyboard cat'
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public1')));

var scoreapi = require('./routes/foldersit');
app.use('/folder_data', scoreapi);
/*app.use(passport.session());


app.use('/', index);
app.use('/auth', authenticate);*/


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    console.log(err);
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
var port = process.env.PORT || 3000;
app.listen(port);

//module.exports = app;