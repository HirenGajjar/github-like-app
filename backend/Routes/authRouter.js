const express = require("express");
require("dotenv").config();
const authRouter = express.Router();
const passport = require("passport");
const { authorizedGitUser } = require("../Controllers/authorized.user");
const {
  gitSessionDestroy,
} = require("../Controllers/gitSession.destroy.controller");
// Signup with github
authRouter.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
// If user have signed up using github
authRouter.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: process.env.CLIENT_URI + "/login",
  }),
  (req, res) => {
    res.redirect(process.env.CLIENT_URI);
  }
);
//Authorizing user
authRouter.get("/check", authorizedGitUser);
// Logout
authRouter.get("/logout", gitSessionDestroy);
module.exports = authRouter;
