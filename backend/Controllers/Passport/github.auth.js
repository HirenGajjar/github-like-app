require("dotenv").config();
const GitHubStrategy = require("passport-github2").Strategy;
const passport = require("passport");
const { userModel } = require("../../db/Model/userModel");

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (obj, done) {
  done(null, obj);
});

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "/api/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log(profile);
    }
  )
);
