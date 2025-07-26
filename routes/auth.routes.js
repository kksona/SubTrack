const express = require("express");
const authRouter = express.Router();

authRouter.post("/sign-in", (req, res) => {
  res.send({
    message: "Sign in route",
  });
});
authRouter.post("/sign-up", (req, res) => {
  res.send({
    message: "Sign up route",
  });
});
authRouter.post("/sign-out", (req, res) => {
  res.send({
    message: "Sign out route",
  });
});

module.exports = authRouter;
