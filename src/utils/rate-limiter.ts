/**
 * Rate Limiter for Twelve Data API
 * Implements token bucket algorithm to limit requests to 3000 per minute
 */
export class RateLimiter {
  private tokens: number;
  private maxTokens: number;
  private refillRate: number; // tokens per millisecond
  private lastRefill: number;
  private requestQueue: Array<{
    resolve: () => void;
    reject: (error: Error) => void;
    timestamp: number;
  }> = [];
  private isProcessing = false;

  constructor(maxRequestsPerMinute: number = 3000) {
    this.maxTokens = maxRequestsPerMinute;
    this.tokens = maxRequestsPerMinute;
    this.refillRate = maxRequestsPerMinute / (60 * 1000); // tokens per millisecond
    this.lastRefill = Date.now();
  }

  /**
   * Refill tokens based on elapsed time
   */
  private refillTokens(): void {
    const now = Date.now();
    const timePassed = now - this.lastRefill;
    const tokensToAdd = Math.floor(timePassed * this.refillRate);
    
    if (tokensToAdd > 0) {
      this.tokens = Math.min(this.maxTokens, this.tokens + tokensToAdd);
      this.lastRefill = now;
    }
  }

  /**
   * Process the request queue
   */
  private async processQueue(): Promise<void> {
    if (this.isProcessing || this.requestQueue.length === 0) {
      return;
    }

    this.isProcessing = true;

    while (this.requestQueue.length > 0) {
      this.refillTokens();

      if (this.tokens >= 1) {
        const request = this.requestQueue.shift();
        if (request) {
          this.tokens -= 1;
          request.resolve();
        }
      } else {
        // Wait for next refill opportunity
        const waitTime = Math.ceil(1 / this.refillRate);
        await new Promise(resolve => setTimeout(resolve, waitTime));
      }
    }

    this.isProcessing = false;
  }

  /**
   * Acquire a token for making a request
   * Returns a promise that resolves when a token is available
   */
  async acquireToken(): Promise<void> {
    return new Promise((resolve, reject) => {
      const request = {
        resolve,
        reject,
        timestamp: Date.now()
      };

      // Remove old requests (older than 1 minute)
      const oneMinuteAgo = Date.now() - 60000;
      this.requestQueue = this.requestQueue.filter(req => req.timestamp > oneMinuteAgo);

      this.requestQueue.push(request);
      this.processQueue();
    });
  }

  /**
   * Get current token count
   */
  getTokenCount(): number {
    this.refillTokens();
    return this.tokens;
  }

  /**
   * Get queue length
   */
  getQueueLength(): number {
    return this.requestQueue.length;
  }

  /**
   * Reset the rate limiter
   */
  reset(): void {
    this.tokens = this.maxTokens;
    this.lastRefill = Date.now();
    this.requestQueue = [];
    this.isProcessing = false;
  }
}

