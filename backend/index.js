require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./Routes/index");
const { exploreRouter } = require("./Routes/exploreRouter");
// Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.get("/", (req, res) => {
  res.send("Hii");
});
app.use("/api/users", userRouter);
app.use("/api/explore", exploreRouter);
app.listen(process.env.PORT);
