import type { HttpClient } from '../utils/http-client.js';
import type {
  EarningsEstimateParams,
  RevenueEstimateParams,
  EPSTrendParams,
  EPSRevisionsParams,
  GrowthEstimatesParams,
  RecommendationsParams,
  PriceTargetParams,
  AnalystRatingsLightParams,
  AnalystRatingsUSEquitiesParams,
  ApiResponse,
  EarningsEstimateData,
  RevenueEstimateData,
  EPSTrendData,
  EPSRevisionsData,
  GrowthEstimatesData,
  RecommendationData,
  PriceTargetData,
  AnalystRatingData
} from '../types/index.js';

/**
 * Analysis endpoints for Twelve Data API
 * Provides access to company Analysis, financial statements, and analyst data
 */
export class AnalysisEndpoints {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get earnings estimates
   * @param params - Parameters including the symbol and period
   * @returns Promise with earnings estimates data
   */
  async getEarningsEstimate(params: EarningsEstimateParams): Promise<ApiResponse<EarningsEstimateData[]>> {
    return this.httpClient.get('/earnings_estimate', params);
  }

  /**
   * Get revenue estimates
   * @param params - Parameters including the symbol and period
   * @returns Promise with revenue estimates data
   */
  async getRevenueEstimate(params: RevenueEstimateParams): Promise<ApiResponse<RevenueEstimateData[]>> {
    return this.httpClient.get('/revenue_estimate', params);
  }

  /**
   * Get EPS trend
   * @param params - Parameters including the symbol
   * @returns Promise with EPS trend data
   */
  async getEPSTrend(params: EPSTrendParams): Promise<ApiResponse<EPSTrendData>> {
    return this.httpClient.get('/eps_trend', params);
  }

  /**
   * Get EPS revisions
   * @param params - Parameters including the symbol
   * @returns Promise with EPS revisions data
   */
  async getEPSRevisions(params: EPSRevisionsParams): Promise<ApiResponse<EPSRevisionsData>> {
    return this.httpClient.get('/eps_revisions', params);
  }

  /**
   * Get growth estimates
   * @param params - Parameters including the symbol
   * @returns Promise with growth estimates data
   */
  async getGrowthEstimates(params: GrowthEstimatesParams): Promise<ApiResponse<GrowthEstimatesData>> {
    return this.httpClient.get('/growth_estimates', params);
  }

  /**
   * Get analyst recommendations
   * @param params - Parameters including the symbol
   * @returns Promise with analyst recommendations data
   */
  async getRecommendations(params: RecommendationsParams): Promise<ApiResponse<RecommendationData[]>> {
    return this.httpClient.get('/recommendations', params);
  }

  /**
   * Get price targets
   * @param params - Parameters including the symbol
   * @returns Promise with price targets data
   */
  async getPriceTarget(params: PriceTargetParams): Promise<ApiResponse<PriceTargetData>> {
    return this.httpClient.get('/price_target', params);
  }

  /**
   * Get analyst ratings (light version)
   * @param params - Parameters including the symbol
   * @returns Promise with analyst ratings data
   */
  async getAnalystRatingsLight(params: AnalystRatingsLightParams): Promise<ApiResponse<AnalystRatingData>> {
    return this.httpClient.get('/analyst_ratings_light', params);
  }

  /**
   * Get analyst ratings for US equities
   * @param params - Parameters including the symbol
   * @returns Promise with detailed analyst ratings data
   */
  async getAnalystRatingsUSEquities(params: AnalystRatingsUSEquitiesParams): Promise<ApiResponse<AnalystRatingData>> {
    return this.httpClient.get('/analyst_ratings_us_equities', params);
  }
}

