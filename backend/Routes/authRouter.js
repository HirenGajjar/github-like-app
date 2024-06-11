const express = require("express");
require("dotenv").config();
const authRouter = express.Router();
const passport = require("passport");
authRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
authRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: process.env.CLIENT_URI + "/login",
  }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URI);
  }
);
module.exports = authRouter;
