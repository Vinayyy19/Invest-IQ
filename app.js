const express = require("express");
const app = express();
const path = require("path");
const engine = require('ejs-mate');
const dbconnection = require("./model/db");
const User = require("./model/userSchema.js");
const UserRoute = require('./router/userRouter.js');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;  // Fixed import
const flash = require('connect-flash');

dbconnection();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.engine('ejs', engine);
app.use(express.static(path.join(__dirname, "public")));

app.use(session({
  secret: "Mysecreaetkey",
  resave: false,
  saveUninitialized: true,
  store: MongoStore.create({
    mongoUrl: "mongodb://localhost:27017/yourDatabaseName",
    touchAfter: 24 * 3600
  }),
  cookie: { 
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    maxAge: 7 * 24 * 60 * 60 * 1000
  }
}));
app.use(flash());

// passport setup for authentication
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy({ usernameField: "email" }, User.authenticate())); // Fixed usernameField issue
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Middleware for global variables
app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.failed = req.flash("failed");
  res.locals.CurrUser = req.user;
  next();
});

app.use("/", UserRoute);

app.listen(8080, () => {
  console.log("Server running on port 8080");
});
