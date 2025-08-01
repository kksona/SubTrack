const express = require("express");
const app = express();
const { PORT } = require("./config/env");
const userRouter = require("./routes/user.routes");
const authRouter = require("./routes/auth.routes");
const subscriptionRouter = require("./routes/subscription.routes");
const connectToDB = require("./database/mongodb");
const cookieParser = require("cookie-parser");
const rateLimiter = require("./middlewares/ratelimiter.middleware");

//built-in middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(rateLimiter);

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscription", subscriptionRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the subscription tracker");
});

app.listen(PORT, async () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
  await connectToDB();
});

module.exports = app;
