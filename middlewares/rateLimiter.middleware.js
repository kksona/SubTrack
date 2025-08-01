const TokenBucket = require("../utils/tokenBucket");

const tokenBucket = new TokenBucket(5, 1); //5 tokens with 1 token per second
const rateLimiter = (req, res, next) => {
  if (tokenBucket.allowRequest()) {
    next(); // Allow the request
  } else {
    res.status(429).send("Too many requests. Please try again later.");
  }
};

module.exports = rateLimiter;
