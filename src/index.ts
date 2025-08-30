import { HttpClient } from "./utils/http-client.js";
import { ReferenceDataEndpoints } from "./endpoints/reference-data.js";
import { CoreDataEndpoints } from "./endpoints/core-data";
import { MutualFundsEndpoints } from "./endpoints/mutual-funds";
import { FundamentalsEndpoints } from "./endpoints/fundamentals";
import { AnalysisEndpoints } from "./endpoints/analysis";
import { TechnicalIndicatorsEndpoints } from "./endpoints/technical-indicators";
import type { TwelveDataConfig, ApiResponse } from "./types/index";

/**
 * Complete Twelve Data API client
 * Provides access to ALL 154 API endpoints with automatic rate limiting
 *
 * Coverage:
 * - Reference Data: 9/9 endpoints (100%)
 * - Core Data: 9/9 endpoints (100%)
 * - Mutual Funds: 12/12 endpoints (100%)
 * - Fundamentals: 17/17 endpoints (100%)
 * - Analysis: 9/9 endpoints (100%)
 * - Technical Indicators: 98/98 endpoints (100%)
 *
 * Total: 154/154 endpoints (100% complete)
 */
export default class TwelveData {
  private httpClient: HttpClient;

  // Endpoint categories
  public readonly referenceData: ReferenceDataEndpoints;
  public readonly coreData: CoreDataEndpoints;
  public readonly mutualFunds: MutualFundsEndpoints;
  public readonly fundamentals: FundamentalsEndpoints;
  public readonly analysis: AnalysisEndpoints;
  public readonly technicalIndicators: TechnicalIndicatorsEndpoints;

  constructor(config: TwelveDataConfig) {
    if (!config.apiKey) {
      throw new Error("API key is required");
    }

    this.httpClient = new HttpClient({
      apiKey: config.apiKey,
      baseUrl: config.baseUrl || "https://twelve-data1.p.rapidapi.com",
      rateLimit: config.rateLimit || 3000, // 3000 requests per minute
    });

    // Initialize all endpoint categories
    this.referenceData = new ReferenceDataEndpoints(this.httpClient);
    this.coreData = new CoreDataEndpoints(this.httpClient);
    this.mutualFunds = new MutualFundsEndpoints(this.httpClient);
    this.fundamentals = new FundamentalsEndpoints(this.httpClient);
    this.analysis = new AnalysisEndpoints(this.httpClient);
    this.technicalIndicators = new TechnicalIndicatorsEndpoints(
      this.httpClient
    );
  }

  /**
   * Make a custom request to any endpoint
   * @param endpoint - API endpoint path
   * @param params - Request parameters
   * @returns Promise with API response
   */
  async customRequest<T = any>(
    endpoint: string,
    params: Record<string, any> = {}
  ): Promise<ApiResponse<T>> {
    return this.httpClient.get(endpoint, params);
  }

  /**
   * Get current rate limiter status
   * @returns Rate limiter status information
   */
  getRateLimiterStatus() {
    return this.httpClient.getRateLimiterStatus();
  }

  /**
   * Reset the rate limiter
   */
  resetRateLimiter() {
    this.httpClient.resetRateLimiter();
  }

  /**
   * Update API key
   * @param apiKey - New API key
   */
  updateApiKey(apiKey: string) {
    this.httpClient.updateApiKey(apiKey);
  }

  /**
   * Get library statistics
   * @returns Statistics about endpoint coverage
   */
  getLibraryStats() {
    return {
      total_endpoints: 154,
      implemented_endpoints: 154,
      coverage_percentage: 100,
      categories: {
        reference_data: { implemented: 9, total: 9, percentage: 100 },
        core_data: { implemented: 9, total: 9, percentage: 100 },
        mutual_funds: { implemented: 12, total: 12, percentage: 100 },
        fundamentals: { implemented: 17, total: 17, percentage: 100 },
        analysis: { implemented: 9, total: 9, percentage: 100 },
        technical_indicators: { implemented: 98, total: 98, percentage: 100 },
      },
      features: [
        "Automatic rate limiting (3000 req/min)",
        "Complete TypeScript support",
        "Zero dependencies",
        "Comprehensive error handling",
        "All 154 endpoints supported (100% complete)",
        "98 Technical Indicators (all official endpoints)",
      ],
    };
  }
}
