var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var helmet = require("helmet");

var app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

var passport = require("passport");
require("./auth/auth");

require("./database/config");

app.use(authRouter);
var userRouter = require("./routers/user");
var wordRouter = require("./routers/word");


app.use("/words", wordRouter);
app.use("/users", userRouter);
module.exports = app;