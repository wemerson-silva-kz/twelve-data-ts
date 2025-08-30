import type { HttpClient } from '../utils/http-client.js';
import type {
  LogoParams,
  ProfileParams,
  DividendsParams,
  SplitsParams,
  EarningsParams,
  EarningsCalendarParams,
  IPOCalendarParams,
  StatisticsParams,
  InsiderTransactionsParams,
  IncomeStatementParams,
  BalanceSheetParams,
  CashFlowParams,
  OptionsExpirationParams,
  OptionsChainParams,
  KeyExecutivesParams,
  FundHoldersParams,
  InstitutionalHoldersParams,
  ApiResponse,
  LogoData,
  ProfileData,
  DividendData,
  SplitData,
  EarningsData,
  EarningsCalendarData,
  IPOCalendarData,
  StatisticsData,
  InsiderTransactionData,
  IncomeStatementData,
  BalanceSheetData,
  CashFlowData,
  OptionsExpirationData,
  OptionsChainData,
  KeyExecutiveData,
  FundHolderData,
  InstitutionalHolderData,
} from '../types/index.js';

/**
 * Fundamentals endpoints for Twelve Data API
 * Provides access to company fundamentals, financial statements, and analyst data
 */
export class FundamentalsEndpoints {
  constructor(private httpClient: HttpClient) {}

  /**
   * Get company logo
   * @param params - Parameters including the symbol
   * @returns Promise with company logo URL
   */
  async getLogo(params: LogoParams): Promise<ApiResponse<LogoData>> {
    return this.httpClient.get('/logo', params);
  }

  /**
   * Get company profile and overview
   * @param params - Parameters including the symbol
   * @returns Promise with comprehensive company profile
   */
  async getProfile(params: ProfileParams): Promise<ApiResponse<ProfileData>> {
    return this.httpClient.get('/profile', params);
  }

  /**
   * Get dividend history
   * @param params - Parameters including the symbol and date range
   * @returns Promise with dividend history data
   */
  async getDividends(params: DividendsParams): Promise<ApiResponse<DividendData[]>> {
    return this.httpClient.get('/dividends', params);
  }

  /**
   * Get stock splits history
   * @param params - Parameters including the symbol and date range
   * @returns Promise with stock splits data
   */
  async getSplits(params: SplitsParams): Promise<ApiResponse<SplitData[]>> {
    return this.httpClient.get('/splits', params);
  }

  /**
   * Get earnings history
   * @param params - Parameters including the symbol and period
   * @returns Promise with earnings data
   */
  async getEarnings(params: EarningsParams): Promise<ApiResponse<EarningsData[]>> {
    return this.httpClient.get('/earnings', params);
  }

  /**
   * Get earnings calendar
   * @param params - Parameters for filtering earnings calendar
   * @returns Promise with upcoming earnings announcements
   */
  async getEarningsCalendar(params: EarningsCalendarParams = {}): Promise<ApiResponse<EarningsCalendarData[]>> {
    return this.httpClient.get('/earnings_calendar', params);
  }

  /**
   * Get IPO calendar
   * @param params - Parameters for filtering IPO calendar
   * @returns Promise with upcoming IPOs
   */
  async getIPOCalendar(params: IPOCalendarParams = {}): Promise<ApiResponse<IPOCalendarData[]>> {
    return this.httpClient.get('/ipo_calendar', params);
  }

  /**
   * Get company statistics
   * @param params - Parameters including the symbol
   * @returns Promise with comprehensive company statistics
   */
  async getStatistics(params: StatisticsParams): Promise<ApiResponse<StatisticsData>> {
    return this.httpClient.get('/statistics', params);
  }

  /**
   * Get insider transactions
   * @param params - Parameters including the symbol
   * @returns Promise with insider trading data
   */
  async getInsiderTransactions(params: InsiderTransactionsParams): Promise<ApiResponse<InsiderTransactionData[]>> {
    return this.httpClient.get('/insider_transactions', params);
  }

  /**
   * Get income statement
   * @param params - Parameters including the symbol and period
   * @returns Promise with income statement data
   */
  async getIncomeStatement(params: IncomeStatementParams): Promise<ApiResponse<IncomeStatementData[]>> {
    return this.httpClient.get('/income_statement', params);
  }

  /**
   * Get balance sheet
   * @param params - Parameters including the symbol and period
   * @returns Promise with balance sheet data
   */
  async getBalanceSheet(params: BalanceSheetParams): Promise<ApiResponse<BalanceSheetData[]>> {
    return this.httpClient.get('/balance_sheet', params);
  }

  /**
   * Get cash flow statement
   * @param params - Parameters including the symbol and period
   * @returns Promise with cash flow data
   */
  async getCashFlow(params: CashFlowParams): Promise<ApiResponse<CashFlowData[]>> {
    return this.httpClient.get('/cash_flow', params);
  }

  /**
   * Get options expiration dates
   * @param params - Parameters including the symbol
   * @returns Promise with options expiration dates
   */
  async getOptionsExpiration(params: OptionsExpirationParams): Promise<ApiResponse<OptionsExpirationData>> {
    return this.httpClient.get('/options_expiration', params);
  }

  /**
   * Get options chain
   * @param params - Parameters including the symbol and filters
   * @returns Promise with options chain data
   */
  async getOptionsChain(params: OptionsChainParams): Promise<ApiResponse<OptionsChainData>> {
    return this.httpClient.get('/options_chain', params);
  }

  /**
   * Get key executives
   * @param params - Parameters including the symbol
   * @returns Promise with key executives data
   */
  async getKeyExecutives(params: KeyExecutivesParams): Promise<ApiResponse<KeyExecutiveData>> {
    return this.httpClient.get('/key_executives', params);
  }

  /**
   * Get fund holders
   * @param params - Parameters including the symbol
   * @returns Promise with fund holders data
   */
  async getFundHolders(params: FundHoldersParams): Promise<ApiResponse<FundHolderData[]>> {
    return this.httpClient.get('/fund_holders', params);
  }

  /**
   * Get institutional holders
   * @param params - Parameters including the symbol
   * @returns Promise with institutional holders data
   */
  async getInstitutionalHolders(params: InstitutionalHoldersParams): Promise<ApiResponse<InstitutionalHolderData[]>> {
    return this.httpClient.get('/institutional_holders', params);
  }
}

