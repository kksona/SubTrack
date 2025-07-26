const userRouter = require("express").Router();

userRouter.get("/", (req, res) => {
  res.send({
    message: "GET all users",
  });
});
userRouter.get("/:id", (req, res) => {
  res.send({
    message: "GET a unique user",
  });
});
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
