import type { HttpClient } from '../utils/http-client.js';
import type {
  TimeSeriesParams,
  ExchangeRateParams,
  CurrencyConversionParams,
  QuoteParams,
  RealTimePriceParams,
  MarketMoversParams,
  ApiResponse,
  TimeSeriesData,
  QuoteData,
  ExchangeRateData,
  RealTimePriceData
} from '../types/index.js';

/**
 * Core Data endpoints for Twelve Data API
 */
export class CoreDataEndpoints {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get time series data for a symbol
   */
  async getTimeSeries(params: TimeSeriesParams): Promise<ApiResponse<TimeSeriesData>> {
    return this.httpClient.get('/time_series', params);
  }

  /**
   * Get exchange rate between two currencies
   */
  async getExchangeRate(params: ExchangeRateParams): Promise<ApiResponse<ExchangeRateData>> {
    return this.httpClient.get('/exchange_rate', params);
  }

  /**
   * Convert currency amount
   */
  async getCurrencyConversion(params: CurrencyConversionParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/currency_conversion', params);
  }

  /**
   * Get quote data for a symbol
   */
  async getQuote(params: QuoteParams): Promise<ApiResponse<QuoteData>> {
    return this.httpClient.get('/quote', params);
  }

  /**
   * Get real-time price for a symbol
   */
  async getRealTimePrice(params: RealTimePriceParams): Promise<ApiResponse<RealTimePriceData>> {
    return this.httpClient.get('/price', params);
  }

  /**
   * Get market movers for stocks
   */
  async getMarketMoversStocks(params: MarketMoversParams = {}): Promise<ApiResponse<any[]>> {
    return this.httpClient.get('/market_movers/stocks', params);
  }

  /**
   * Get market movers for ETFs
   */
  async getMarketMoversETFs(params: MarketMoversParams = {}): Promise<ApiResponse<any[]>> {
    return this.httpClient.get('/market_movers/etfs', params);
  }

  /**
   * Get market movers for Forex
   */
  async getMarketMoversForex(params: MarketMoversParams = {}): Promise<ApiResponse<any[]>> {
    return this.httpClient.get('/market_movers/forex', params);
  }

  /**
   * Get market movers for Crypto
   */
  async getMarketMoversCrypto(params: MarketMoversParams = {}): Promise<ApiResponse<any[]>> {
    return this.httpClient.get('/market_movers/crypto', params);
  }
}

