const express = require("express");
const authRouter = express.Router();
authRouter.post("/github");
authRouter.post("/github/callback");
module.exports = authRouter;
