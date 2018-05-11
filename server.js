// //Root of Server

const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const routes = require("./routes")
const bodyParser = require('body-parser');
const path = require("path");
const passport = require('passport');
const config = require('./config');
const logger = require('morgan')

const PORT = process.env.PORT || 3001;


// //Body Parser Middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//let express know static folder
app.use("/public", express.static(path.join(__dirname, "public")));

// connect to the database and load models
// uses environmental variable for deployment (Heroku) or defaults to local config
require('./models').connect(process.env.MONGODB_URI || config.dbUri);

// Use morgan logger for logging requests
app.use(logger("dev"));

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require('./passport/local-signup');
const localLoginStrategy = require('./passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./middleware/auth-check');
//app.use('/api', authCheckMiddleware);

// routes
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
});



