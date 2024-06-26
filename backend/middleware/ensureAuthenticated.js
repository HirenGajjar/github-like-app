const passport = require("passport");
const ensureAuthenticated = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect(process.env.CLIENT_URI + "/login");
};

module.exports = { ensureAuthenticated };
