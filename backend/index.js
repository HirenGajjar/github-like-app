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
// Middlewares
app.use(cors());
app.use(express.json());
// Use passport
app.use(
  session({ secret: "keyboard cat", resave: false, saveUninitialized: false })
);

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
