const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo')(session);

const port = process.env.PORT || 8080;
const app = express();

//create MongoDB connection
mongoose.connect('mongodb://localhost:27017/dmHelper'); // basic local connection
const db = mongoose.connection;

//session options
const sessionOptions = {
  secret: "this is a super secret", // the most secret of secrets
  resave: true,
  saveUninitialized: false,
  cookie: { maxAge: 2 * 60 * 60 * 1000 },
  store: new MongoStore({
    mongooseConnection: db,
  }),
};

// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser('this is a super secret'));

// passport configuration
require('./config/passport')(passport); // pass passport for configuration

//run session cache
app.use(session(sessionOptions));
//initialize passort
app.use(passport.initialize());
//restore session
app.use(passport.session());

// include routes
require('./router/auth')(app, passport); // load our routes and pass in our app and fully configured passport
const apiRouter = require('./router/api');
app.use('/api', apiRouter);

app.listen(port, () => {
  console.log('App running on port', port);
});
