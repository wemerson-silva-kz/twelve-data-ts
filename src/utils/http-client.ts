import { RateLimiter } from './rate-limiter.js';
import type { TwelveDataConfig, ApiResponse } from '../types/index.js';

/**
 * HTTP Client for Twelve Data API with built-in rate limiting
 */
export class HttpClient {
  
  private config: TwelveDataConfig;
  private rateLimiter: RateLimiter;
  private baseUrl: string;

  constructor(config: TwelveDataConfig) {
    this.config = config;
    this.baseUrl = config.baseUrl || 'https://twelve-data1.p.rapidapi.com';
    this.rateLimiter = new RateLimiter(config.rateLimit || 2000);
  }

  /**
   * Build query string from parameters
   */
  private buildQueryString(params: Record<string, any>): string {
    const searchParams = new URLSearchParams();
    
    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });

    return searchParams.toString();
  }

  /**
   * Make a GET request to the API
   */
  async get<T = any>(endpoint: string, params: Record<string, any> = {}): Promise<ApiResponse<T>> {
    // Wait for rate limiter token
    await this.rateLimiter.acquireToken();

    const queryString = this.buildQueryString(params);
    const url = `${this.baseUrl}${endpoint}${queryString ? `?${queryString}` : ''}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'x-rapidapi-host': 'twelve-data1.p.rapidapi.com',
          'x-rapidapi-key': this.config.apiKey,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      
      if (contentType?.includes('application/json')) {
        const data = await response.json() as T;
        return {
          data,
          status: 'ok'
        };
      } else {
        // Handle CSV or other text responses
        const text = await response.text();
        return {
          data: text as T,
          status: 'ok'
        };
      }
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : 'Unknown error occurred',
        status: 'error'
      };
    }
  }

  /**
   * Get rate limiter status
   */
  getRateLimiterStatus() {
    return {
      tokens: this.rateLimiter.getTokenCount(),
      queueLength: this.rateLimiter.getQueueLength()
    };
  }

  /**
   * Reset rate limiter
   */
  resetRateLimiter(): void {
    this.rateLimiter.reset();
  }

  updateApiKey(apiKey: string) {
    this.config.apiKey = apiKey;
  }
}

