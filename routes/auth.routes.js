const express = require("express");
const authRouter = express.Router();
const { signIn, signOut, signUp } = require("../controllers/auth.controller");

authRouter.post("/sign-in", signIn);
authRouter.post("/sign-up", signUp);
authRouter.post("/sign-out", signOut);

module.exports = authRouter;
