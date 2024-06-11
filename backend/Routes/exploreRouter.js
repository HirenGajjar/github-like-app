const express = require("express");
const exploreRouter = express.Router();
const { exploreLanguageRepos } = require("../Controllers/explore.controller");
//Explore Router
exploreRouter.get("/repos/:language", exploreLanguageRepos);
module.exports = exploreRouter;
