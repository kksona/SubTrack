//Token Bucket
class TokenBucket {
  #capacity;
  #tokens;
  #refillRate;
  #lastRefillTime;

  constructor(capacity, refillRate) {
    this.#capacity = capacity;
    this.#tokens = capacity; // Start full
    this.#refillRate = refillRate;
    this.#lastRefillTime = Date.now();
  }

  // Private method
  #refill() {
    const now = Date.now();
    const elapsed = (now - this.#lastRefillTime) / 1000; // Convert to seconds
    const newTokens = elapsed * this.#refillRate;
    this.#tokens = Math.min(this.#capacity, this.#tokens + newTokens);
    this.#lastRefillTime = now;
  }

  // Public method
  allowRequest() {
    this.#refill(); // Refill tokens before processing the request

    if (this.#tokens >= 1) {
      this.#tokens--; // Use a token
      return true; // Request allowed
    }

    return false; // Request denied
  }
}

module.exports = TokenBucket;
