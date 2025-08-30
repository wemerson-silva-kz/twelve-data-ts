import type { HttpClient } from '../utils/http-client.js';
import type {
  MutualFundsListParams,
  MutualFundsTypeListParams,
  MutualFundsFamilyListParams,
  MutualFundsMarketMoversParams,
  MutualFundsAllDataParams,
  MutualFundsSummaryParams,
  MutualFundsPerformanceParams,
  MutualFundsRiskParams,
  MutualFundsRatingsParams,
  MutualFundsCompositionParams,
  MutualFundsPurchaseInfoParams,
  MutualFundsSustainabilityParams,
  ApiResponse,
  MutualFundData,
  MutualFundTypeData,
  MutualFundFamilyData,
  MutualFundMarketMoverData,
  MutualFundAllData,
  MutualFundSummaryData,
  MutualFundPerformanceData,
  MutualFundRiskData,
  MutualFundRatingsData,
  MutualFundCompositionData,
  MutualFundPurchaseInfoData,
  MutualFundSustainabilityData
} from '../types/index.js';

/**
 * Mutual Funds endpoints for Twelve Data API
 * Provides access to mutual fund data, performance, risk metrics, and more
 */
export class MutualFundsEndpoints {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get list of available mutual funds
   * @param params - Parameters for filtering mutual funds
   * @returns Promise with list of mutual funds
   */
  async getMutualFundsList(params: MutualFundsListParams = {}): Promise<ApiResponse<MutualFundData[]>> {
    return this.httpClient.get('/mutual_funds/world/list', params);
  }

  /**
   * Get list of mutual fund types
   * @param params - Parameters for the request
   * @returns Promise with list of mutual fund types
   */
  async getMutualFundsTypeList(params: MutualFundsTypeListParams = {}): Promise<ApiResponse<MutualFundTypeData[]>> {
    return this.httpClient.get('/mutual_funds/world/type_list', params);
  }

  /**
   * Get list of mutual fund families
   * @param params - Parameters for filtering fund families
   * @returns Promise with list of mutual fund families
   */
  async getMutualFundsFamilyList(params: MutualFundsFamilyListParams = {}): Promise<ApiResponse<MutualFundFamilyData[]>> {
    return this.httpClient.get('/mutual_funds/world/family_list', params);
  }

  /**
   * Get mutual funds market movers
   * @param params - Parameters for filtering market movers
   * @returns Promise with mutual funds market movers data
   */
  async getMutualFundsMarketMovers(params: MutualFundsMarketMoversParams = {}): Promise<ApiResponse<MutualFundMarketMoverData[]>> {
    return this.httpClient.get('/mutual_funds/world/market_movers', params);
  }

  /**
   * Get all data for a specific mutual fund
   * @param params - Parameters including the fund symbol
   * @returns Promise with comprehensive mutual fund data
   */
  async getMutualFundsAllData(params: MutualFundsAllDataParams): Promise<ApiResponse<MutualFundAllData>> {
    return this.httpClient.get('/mutual_funds/world/all_data', params);
  }

  /**
   * Get summary information for a mutual fund
   * @param params - Parameters including the fund symbol
   * @returns Promise with mutual fund summary data
   */
  async getMutualFundsSummary(params: MutualFundsSummaryParams): Promise<ApiResponse<MutualFundSummaryData>> {
    return this.httpClient.get('/mutual_funds/world/summary', params);
  }

  /**
   * Get performance data for a mutual fund
   * @param params - Parameters including the fund symbol
   * @returns Promise with mutual fund performance data
   */
  async getMutualFundsPerformance(params: MutualFundsPerformanceParams): Promise<ApiResponse<MutualFundPerformanceData>> {
    return this.httpClient.get('/mutual_funds/world/performance', params);
  }

  /**
   * Get risk metrics for a mutual fund
   * @param params - Parameters including the fund symbol
   * @returns Promise with mutual fund risk data
   */
  async getMutualFundsRisk(params: MutualFundsRiskParams): Promise<ApiResponse<MutualFundRiskData>> {
    return this.httpClient.get('/mutual_funds/world/risk', params);
  }

  /**
   * Get ratings for a mutual fund
   * @param params - Parameters including the fund symbol
   * @returns Promise with mutual fund ratings data
   */
  async getMutualFundsRatings(params: MutualFundsRatingsParams): Promise<ApiResponse<MutualFundRatingsData>> {
    return this.httpClient.get('/mutual_funds/world/ratings', params);
  }

  /**
   * Get composition and holdings for a mutual fund
   * @param params - Parameters including the fund symbol
   * @returns Promise with mutual fund composition data
   */
  async getMutualFundsComposition(params: MutualFundsCompositionParams): Promise<ApiResponse<MutualFundCompositionData>> {
    return this.httpClient.get('/mutual_funds/world/composition', params);
  }

  /**
   * Get purchase information for a mutual fund
   * @param params - Parameters including the fund symbol
   * @returns Promise with mutual fund purchase information
   */
  async getMutualFundsPurchaseInfo(params: MutualFundsPurchaseInfoParams): Promise<ApiResponse<MutualFundPurchaseInfoData>> {
    return this.httpClient.get('/mutual_funds/world/purchase_info', params);
  }

  /**
   * Get sustainability and ESG data for a mutual fund
   * @param params - Parameters including the fund symbol
   * @returns Promise with mutual fund sustainability data
   */
  async getMutualFundsSustainability(params: MutualFundsSustainabilityParams): Promise<ApiResponse<MutualFundSustainabilityData>> {
    return this.httpClient.get('/mutual_funds/world/sustainability', params);
  }
}

