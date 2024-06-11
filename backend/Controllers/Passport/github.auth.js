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
    async function (accessToken, refreshToken, profile, done) {
      const user = await userModel.findOne({
        username: profile.username,
      });
      // If user have not signed up with github
      if (!user) {
        const newUser = await new userModel({
          name: profile.displayName,
          username: profile.username,
          profileUrl: profile.profileUrl,
          avatarUrl: profile.photos[0].value,
          likedProfiles: [],
          likedBy: [],
        });
        await newUser.save();
        done(null, newUser);
      }
      // If user have signed up so now login
      else {
        done(null, user);
      }
    }
  )
);
