const passport = require("passport");
const authorizedGitUser = (req, res) => {
  if (req.isAuthenticated()) {
    res.send({ user: req.user });
  } else {
    res.send({ user: null });
  }
};

module.exports = { authorizedGitUser };
