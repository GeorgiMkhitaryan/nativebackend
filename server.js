const express = require('express');
const mongoose = require('mongoose');
const keys = require('./keys');
const app = express();
const bodyParser = require("body-parser");
const homePage = require("./routes/homePage");
const index = require("./routes/index");

mongoose.connect(keys.MONGODB_URI, { 
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(require("morgan")("dev"))
app.use('/homepage', homePage);
app.use('/', index);



/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

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

module.exports = app;
