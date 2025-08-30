import type { HttpClient } from '../utils/http-client.js';
import type {
  StocksListParams,
  ForexPairsListParams,
  CryptocurrenciesListParams,
  ETFsListParams,
  ExchangesParams,
  CryptoExchangesParams,
  TechnicalIndicatorsInterfaceParams,
  SymbolSearchParams,
  EarliestTimestampParams,
  ApiResponse,
  StockData,
  ForexPairData,
  CryptocurrencyData
} from '../types/index.js';

/**
 * Reference Data endpoints for Twelve Data API
 */
export class ReferenceDataEndpoints {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get list of available stocks
   */
  async getStocksList(params: StocksListParams = {}): Promise<ApiResponse<StockData[]>> {
    return this.httpClient.get('/stocks', params);
  }

  /**
   * Get list of available forex pairs
   */
  async getForexPairsList(params: ForexPairsListParams = {}): Promise<ApiResponse<ForexPairData[]>> {
    return this.httpClient.get('/forex_pairs', params);
  }

  /**
   * Get list of available cryptocurrencies
   */
  async getCryptocurrenciesList(params: CryptocurrenciesListParams = {}): Promise<ApiResponse<CryptocurrencyData[]>> {
    return this.httpClient.get('/cryptocurrencies', params);
  }

  /**
   * Get list of available ETFs
   */
  async getETFsList(params: ETFsListParams = {}): Promise<ApiResponse<any[]>> {
    return this.httpClient.get('/etf', params);
  }

  /**
   * Get list of available exchanges
   */
  async getExchanges(params: ExchangesParams = {}): Promise<ApiResponse<any[]>> {
    return this.httpClient.get('/exchanges', params);
  }

  /**
   * Get list of available crypto exchanges
   */
  async getCryptoExchanges(params: CryptoExchangesParams = {}): Promise<ApiResponse<any[]>> {
    return this.httpClient.get('/crypto_exchanges', params);
  }

  /**
   * Get technical indicators interface
   */
  async getTechnicalIndicatorsInterface(params: TechnicalIndicatorsInterfaceParams = {}): Promise<ApiResponse<any>> {
    return this.httpClient.get('/technical_indicators', params);
  }

  /**
   * Search for symbols
   */
  async symbolSearch(params: SymbolSearchParams): Promise<ApiResponse<any[]>> {
    return this.httpClient.get('/symbol_search', params);
  }

  /**
   * Get earliest timestamp for a symbol
   */
  async getEarliestTimestamp(params: EarliestTimestampParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/earliest_timestamp', params);
  }
}

