const userRouter = require("express").Router();
const { getAllUsers, getUserById } = require("../controllers/users.controller");
const authorize = require("../middlewares/auth.middleware");

userRouter.get("/", getAllUsers);
userRouter.get("/:id", authorize, getUserById);
userRouter.post("/", (req, res) => {
  res.send({
    message: "CREATE a new user",
  });
});
userRouter.put("/:id", (req, res) => {
  res.send({
    message: "UPDATE a unique user",
  });
});
userRouter.delete("/:id", (req, res) => {
  res.send({
    message: "DELETE a unique user",
  });
});

module.exports = userRouter;
