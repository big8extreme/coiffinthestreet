var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var usersRouter = require('./routes/users');
var maraudesRouter = require('./routes/maraudes');
var authRouter = require('./routes/auth');
var participantsRouter = require('./routes/participants');
var configsRouter = require('./routes/configs');
var picturesRouter = require('./routes/pictures');

const passport = require('passport');
const { localAuthStrategy } = require('./routes/strategies/local');
const { jwtAuthStrategy } = require('./routes/strategies/jwt');


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Expose static /uploads folders to retrive upladed files.
app.use('/uploads', express.static('uploads'));

// Initialize auth strategies config
localAuthStrategy;
jwtAuthStrategy;

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/maraudes', maraudesRouter);
app.use('/api/v1/participants', participantsRouter);
app.use('/api/v1/configs', configsRouter);
app.use('/api/v1/reset', authRouter);
app.use('/api/v1/contact', configsRouter);
app.use('/api/v1/pictures', picturesRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client')));
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
  });
}

module.exports = app;
