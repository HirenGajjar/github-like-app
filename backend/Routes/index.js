const express = require("express");
const router = express.Router();
const { getUserProfileAndRepos } = require("../Controllers/user.controller");
const { ensureAuthenticated } = require("../middleware/ensureAuthenticated");
const { likeProfile } = require("../Controllers/user.controller");
// Get user Route
router.get("/profile/:username", getUserProfileAndRepos);
router.post("/like/:username", ensureAuthenticated, likeProfile);
module.exports = router;
