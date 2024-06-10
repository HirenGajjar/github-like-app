const express = require("express");
const router = express.Router();
const { getUserProfileAndRepos } = require("../Controllers/user.controller");

// Get user Route
router.get("/profile/:username", getUserProfileAndRepos);
module.exports = router;
