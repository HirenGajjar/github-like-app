require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Routes/index");
const exploreRouter = require("./Routes/exploreRouter");
const authRouter = require("./Routes/authRouter");
const { DBConnection } = require("./db/db");
const session = require("express-session");
const passport = require("passport");
require("./Controllers/Passport/github.auth");
// Cors
app.use(cors({ origin: true, credentials: true }));
// Body parser
app.use(express.json());
// Use passport session
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);
// Passport middlewares
app.use(passport.initialize());
app.use(passport.session());
//DB Connection
DBConnection();
//Routes
app.get("/", (req, res) => {
  res.send("Hii");
});
app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/explore", exploreRouter);

app.listen(process.env.PORT);
