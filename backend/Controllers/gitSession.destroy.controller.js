const session = require("express-session");
const gitSessionDestroy = (req, res) => {
  req.session.destroy((err) => {
    res.json({ message: "Logged out!" });
  });
};
module.exports = { gitSessionDestroy };
