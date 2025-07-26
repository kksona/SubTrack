const subscriptionRouter = require("express").Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({
    message: "GET all subscriptions",
  });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({
    message: "GET subscription details of a unique subscription",
  });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({
    message: "CREATE a new subscription",
  });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({
    message: "UPDATE a subscription",
  });
});

subscriptionRouter.delete("/", (req, res) => {
  res.send({
    message: "DELETE a subscription",
  });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({
    message: "GET all subscriptions of a unique user",
  });
});

subscriptionRouter.get("/:id/cancel", (req, res) => {
  res.send({
    message: "CANCEL the subscription",
  });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({
    message: "GET all the upcoming renewals",
  });
});

module.exports = subscriptionRouter;
