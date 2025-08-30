// Complete types for Twelve Data API - All endpoints
export interface TwelveDataConfig {
  apiKey: string;
  baseUrl?: string;
  rateLimit?: number; // requests per minute, default 3000
}

export interface ApiResponse<T = any> {
  data?: T;
  status?: string;
  message?: string;
  error?: string;
}

export type ResponseFormat = 'json' | 'csv';
export type Interval = '1min' | '5min' | '15min' | '30min' | '45min' | '1h' | '2h' | '4h' | '1day' | '1week' | '1month';

// Reference Data Types (existing)
export interface StocksListParams {
  country?: string;
  exchange?: string;
  symbol?: string;
  format?: ResponseFormat;
  type?: string;
}

export interface ForexPairsListParams {
  currency_base?: string;
  symbol?: string;
  format?: ResponseFormat;
  currency_quote?: string;
}

export interface CryptocurrenciesListParams {
  exchange?: string;
  currency_base?: string;
  currency_quote?: string;
  symbol?: string;
  format?: ResponseFormat;
}

export interface ETFsListParams {
  symbol?: string;
  format?: ResponseFormat;
}

export interface ExchangesParams {
  type?: string;
  name?: string;
  format?: ResponseFormat;
}

export interface CryptoExchangesParams {
  format?: ResponseFormat;
}

export interface TechnicalIndicatorsInterfaceParams {
  format?: ResponseFormat;
}

export interface SymbolSearchParams {
  symbol: string;
  outputsize?: number;
  format?: ResponseFormat;
}

export interface EarliestTimestampParams {
  symbol: string;
  interval: Interval;
  format?: ResponseFormat;
}

// Core Data Types (existing)
export interface TimeSeriesParams {
  symbol: string;
  interval: Interval;
  outputsize?: number;
  format?: ResponseFormat;
  start_date?: string;
  end_date?: string;
  timezone?: string;
  date?: string;
  order?: 'asc' | 'desc';
}

export interface ExchangeRateParams {
  symbol: string;
  format?: ResponseFormat;
  date?: string;
}

export interface CurrencyConversionParams {
  symbol: string;
  amount: number;
  format?: ResponseFormat;
  date?: string;
}

export interface QuoteParams {
  symbol: string;
  interval?: Interval;
  format?: ResponseFormat;
  outputsize?: number;
  timezone?: string;
}

export interface RealTimePriceParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface MarketMoversParams {
  country?: string;
  format?: ResponseFormat;
}

// Mutual Funds Types (existing)
export interface MutualFundsListParams {
  country?: string;
  fund_family?: string;
  fund_type?: string;
  performance_rating?: string;
  risk_rating?: string;
  format?: ResponseFormat;
  outputsize?: number;
}

export interface MutualFundsTypeListParams {
  format?: ResponseFormat;
}

export interface MutualFundsFamilyListParams {
  country?: string;
  format?: ResponseFormat;
}

export interface MutualFundsMarketMoversParams {
  country?: string;
  format?: ResponseFormat;
}

export interface MutualFundsAllDataParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface MutualFundsSummaryParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface MutualFundsPerformanceParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface MutualFundsRiskParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface MutualFundsRatingsParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface MutualFundsCompositionParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface MutualFundsPurchaseInfoParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface MutualFundsSustainabilityParams {
  symbol: string;
  format?: ResponseFormat;
}

// Fundamentals Types (NEW)
export interface LogoParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface ProfileParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface DividendsParams {
  symbol: string;
  format?: ResponseFormat;
  start_date?: string;
  end_date?: string;
  outputsize?: number;
}

export interface SplitsParams {
  symbol: string;
  format?: ResponseFormat;
  start_date?: string;
  end_date?: string;
  outputsize?: number;
}

export interface EarningsParams {
  symbol: string;
  format?: ResponseFormat;
  period?: 'annual' | 'quarterly';
  outputsize?: number;
}

export interface EarningsCalendarParams {
  exchange?: string;
  country?: string;
  format?: ResponseFormat;
  start_date?: string;
  end_date?: string;
}

export interface IPOCalendarParams {
  exchange?: string;
  country?: string;
  format?: ResponseFormat;
  start_date?: string;
  end_date?: string;
}

export interface StatisticsParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface InsiderTransactionsParams {
  symbol: string;
  format?: ResponseFormat;
  outputsize?: number;
}

export interface IncomeStatementParams {
  symbol: string;
  format?: ResponseFormat;
  period?: 'annual' | 'quarterly';
  outputsize?: number;
}

export interface BalanceSheetParams {
  symbol: string;
  format?: ResponseFormat;
  period?: 'annual' | 'quarterly';
  outputsize?: number;
}

export interface CashFlowParams {
  symbol: string;
  format?: ResponseFormat;
  period?: 'annual' | 'quarterly';
  outputsize?: number;
}

export interface OptionsExpirationParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface OptionsChainParams {
  symbol: string;
  format?: ResponseFormat;
  expiration_date?: string;
  option_type?: 'call' | 'put';
  side?: 'in_the_money' | 'out_of_the_money' | 'near_the_money';
}

export interface KeyExecutivesParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface FundHoldersParams {
  symbol: string;
  format?: ResponseFormat;
  outputsize?: number;
}

export interface InstitutionalHoldersParams {
  symbol: string;
  format?: ResponseFormat;
  outputsize?: number;
}

export interface EarningsEstimateParams {
  symbol: string;
  format?: ResponseFormat;
  period?: 'annual' | 'quarterly';
}

export interface RevenueEstimateParams {
  symbol: string;
  format?: ResponseFormat;
  period?: 'annual' | 'quarterly';
}

export interface EPSTrendParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface EPSRevisionsParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface GrowthEstimatesParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface RecommendationsParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface PriceTargetParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface AnalystRatingsLightParams {
  symbol: string;
  format?: ResponseFormat;
}

export interface AnalystRatingsUSEquitiesParams {
  symbol: string;
  format?: ResponseFormat;
}

// Technical Indicators Base Type
export interface TechnicalIndicatorParams {
  symbol: string;
  interval: Interval;
  format?: ResponseFormat;
  outputsize?: number;
  time_period?: number;
  series_type?: 'close' | 'open' | 'high' | 'low';
  ma_type?: number;
  fastperiod?: number;
  slowperiod?: number;
  signalperiod?: number;
  fastmatype?: number;
  slowmatype?: number;
  signalmatype?: number;
  nbdevup?: number;
  nbdevdn?: number;
  acceleration?: number;
  maximum?: number;
}

// Response Types - Reference Data
export interface StockData {
  symbol: string;
  name: string;
  currency: string;
  exchange: string;
  mic_code: string;
  country: string;
  type: string;
}

export interface ForexPairData {
  symbol: string;
  currency_group: string;
  currency_base: string;
  currency_quote: string;
}

export interface CryptocurrencyData {
  symbol: string;
  available_exchanges: string[];
  currency_base: string;
  currency_quote: string;
}

// Response Types - Core Data
export interface TimeSeriesData {
  meta: {
    symbol: string;
    interval: string;
    currency: string;
    exchange_timezone: string;
    exchange: string;
    mic_code: string;
    type: string;
  };
  values: Array<{
    datetime: string;
    open: string;
    high: string;
    low: string;
    close: string;
    volume: string;
  }>;
  status: string;
}

export interface QuoteData {
  symbol: string;
  name: string;
  exchange: string;
  mic_code: string;
  currency: string;
  datetime: string;
  timestamp: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  previous_close: string;
  change: string;
  percent_change: string;
  average_volume: string;
  is_market_open: boolean;
  fifty_two_week: {
    low: string;
    high: string;
    low_change: string;
    high_change: string;
    low_change_percent: string;
    high_change_percent: string;
    range: string;
  };
}

export interface ExchangeRateData {
  symbol: string;
  rate: number;
  timestamp: number;
}

export interface RealTimePriceData {
  symbol: string;
  name: string;
  price: number;
  change: number;
  percent_change: number;
}

// Response Types - Mutual Funds (existing)
export interface MutualFundData {
  symbol: string;
  name: string;
  fund_family: string;
  fund_type: string;
  currency: string;
  exchange: string;
  country: string;
  performance_rating?: string;
  risk_rating?: string;
  expense_ratio?: number;
  net_assets?: number;
  inception_date?: string;
}

export interface MutualFundTypeData {
  type: string;
  description: string;
  count: number;
}

export interface MutualFundFamilyData {
  family: string;
  country: string;
  funds_count: number;
  total_assets?: number;
}

export interface MutualFundMarketMoverData {
  symbol: string;
  name: string;
  change: number;
  percent_change: number;
  price: number;
  volume?: number;
}

export interface MutualFundAllData {
  meta: {
    symbol: string;
    name: string;
    fund_family: string;
    fund_type: string;
    currency: string;
    exchange: string;
    country: string;
  };
  summary: MutualFundSummaryData;
  performance: MutualFundPerformanceData;
  risk: MutualFundRiskData;
  ratings: MutualFundRatingsData;
  composition: MutualFundCompositionData;
  purchase_info: MutualFundPurchaseInfoData;
  sustainability: MutualFundSustainabilityData;
}

export interface MutualFundSummaryData {
  symbol: string;
  name: string;
  fund_family: string;
  fund_type: string;
  objective: string;
  inception_date: string;
  expense_ratio: number;
  net_assets: number;
  nav: number;
  nav_change: number;
  nav_change_percent: number;
  yield: number;
  ytd_return: number;
  beta: number;
  alpha: number;
  mean_annual_return: number;
  risk_rating: string;
  sustainability_rating: string;
}

export interface MutualFundPerformanceData {
  symbol: string;
  returns: {
    '1d': number;
    '5d': number;
    '1m': number;
    '3m': number;
    '6m': number;
    '1y': number;
    '3y': number;
    '5y': number;
    '10y': number;
    ytd: number;
    inception: number;
  };
  annual_returns: Array<{
    year: number;
    return: number;
  }>;
  quarterly_returns: Array<{
    quarter: string;
    return: number;
  }>;
  benchmark_comparison: {
    benchmark_name: string;
    fund_return: number;
    benchmark_return: number;
    excess_return: number;
  };
}

export interface MutualFundRiskData {
  symbol: string;
  risk_metrics: {
    standard_deviation: number;
    beta: number;
    alpha: number;
    r_squared: number;
    sharpe_ratio: number;
    treynor_ratio: number;
    information_ratio: number;
    maximum_drawdown: number;
    downside_deviation: number;
    sortino_ratio: number;
  };
  risk_rating: string;
  risk_level: 'Low' | 'Below Average' | 'Average' | 'Above Average' | 'High';
  volatility_measures: {
    price_volatility: number;
    category_volatility: number;
    benchmark_volatility: number;
  };
}

export interface MutualFundRatingsData {
  symbol: string;
  overall_rating: number;
  risk_rating: number;
  return_rating: number;
  sustainability_rating: number;
  analyst_rating: string;
  morningstar_rating: number;
  lipper_rating: number;
  rating_date: string;
  peer_group: string;
  percentile_rank: number;
}

export interface MutualFundCompositionData {
  symbol: string;
  top_holdings: Array<{
    symbol: string;
    name: string;
    weight: number;
    shares: number;
    market_value: number;
  }>;
  sector_allocation: Array<{
    sector: string;
    weight: number;
  }>;
  asset_allocation: Array<{
    asset_class: string;
    weight: number;
  }>;
  geographic_allocation: Array<{
    region: string;
    weight: number;
  }>;
  market_cap_allocation: {
    large_cap: number;
    mid_cap: number;
    small_cap: number;
    micro_cap: number;
  };
  style_allocation: {
    value: number;
    blend: number;
    growth: number;
  };
}

export interface MutualFundPurchaseInfoData {
  symbol: string;
  minimum_investment: {
    initial: number;
    additional: number;
    ira_initial: number;
    ira_additional: number;
  };
  fees: {
    front_load: number;
    deferred_load: number;
    expense_ratio: number;
    management_fee: number;
    '12b1_fee': number;
    redemption_fee: number;
    exchange_fee: number;
  };
  purchase_constraints: {
    available_for_purchase: boolean;
    available_for_ira: boolean;
    available_for_401k: boolean;
    closed_to_new_investors: boolean;
  };
  distribution_schedule: {
    dividend_frequency: string;
    capital_gains_frequency: string;
    last_dividend_date: string;
    last_capital_gains_date: string;
  };
}

export interface MutualFundSustainabilityData {
  symbol: string;
  sustainability_rating: number;
  esg_score: number;
  environmental_score: number;
  social_score: number;
  governance_score: number;
  controversy_score: number;
  sustainable_investment: boolean;
  carbon_intensity: number;
  fossil_fuel_involvement: number;
  esg_quality_score: number;
  peer_group: string;
  peer_count: number;
  percentile_rank: number;
  last_updated: string;
}

// Response Types - Fundamentals (NEW)
export interface LogoData {
  symbol: string;
  url: string;
}

export interface ProfileData {
  symbol: string;
  name: string;
  exchange: string;
  currency: string;
  country: string;
  sector: string;
  industry: string;
  address: string;
  full_time_employees: number;
  fiscal_year_end: string;
  latest_quarter: string;
  market_capitalization: number;
  ebitda: number;
  pe_ratio: number;
  peg_ratio: number;
  book_value: number;
  dividend_per_share: number;
  dividend_yield: number;
  eps: number;
  revenue_per_share_ttm: number;
  profit_margin: number;
  operating_margin_ttm: number;
  return_on_assets_ttm: number;
  return_on_equity_ttm: number;
  revenue_ttm: number;
  gross_profit_ttm: number;
  diluted_eps_ttm: number;
  quarterly_earnings_growth_yoy: number;
  quarterly_revenue_growth_yoy: number;
  analyst_target_price: number;
  trailing_pe: number;
  forward_pe: number;
  price_to_sales_ratio_ttm: number;
  price_to_book_ratio: number;
  ev_to_revenue: number;
  ev_to_ebitda: number;
  beta: number;
  week_52_high: number;
  week_52_low: number;
  day_50_moving_average: number;
  day_200_moving_average: number;
  shares_outstanding: number;
  shares_float: number;
  shares_short: number;
  shares_short_prior_month: number;
  short_ratio: number;
  short_percent_outstanding: number;
  short_percent_float: number;
  percent_insiders: number;
  percent_institutions: number;
  forward_annual_dividend_rate: number;
  forward_annual_dividend_yield: number;
  payout_ratio: number;
  dividend_date: string;
  ex_dividend_date: string;
  last_split_factor: string;
  last_split_date: string;
  description: string;
  website: string;
  logo_url: string;
}

export interface DividendData {
  symbol: string;
  ex_date: string;
  dividend: number;
}

export interface SplitData {
  symbol: string;
  date: string;
  ratio: string;
  from_factor: number;
  to_factor: number;
}

export interface EarningsData {
  symbol: string;
  fiscal_date_ending: string;
  reported_date: string;
  reported_eps: number;
  estimated_eps: number;
  surprise: number;
  surprise_percentage: number;
}

export interface EarningsCalendarData {
  symbol: string;
  name: string;
  exchange: string;
  currency: string;
  earnings_date: string;
  eps_estimate: number;
  eps_actual?: number;
  revenue_estimate: number;
  revenue_actual?: number;
}

export interface IPOCalendarData {
  symbol: string;
  name: string;
  exchange: string;
  currency: string;
  ipo_date: string;
  price_range_low: number;
  price_range_high: number;
  shares_offered: number;
  expected_to_trade: string;
}

export interface StatisticsData {
  symbol: string;
  valuation_metrics: {
    market_capitalization: number;
    enterprise_value: number;
    trailing_pe: number;
    forward_pe: number;
    peg_ratio: number;
    price_to_sales_ttm: number;
    price_to_book: number;
    ev_to_revenue: number;
    ev_to_ebitda: number;
  };
  financial_highlights: {
    fiscal_year_ends: string;
    most_recent_quarter: string;
    profit_margin: number;
    operating_margin: number;
    return_on_assets: number;
    return_on_equity: number;
    revenue_ttm: number;
    revenue_per_share_ttm: number;
    quarterly_revenue_growth: number;
    gross_profit_ttm: number;
    ebitda: number;
    net_income_avi_to_common_ttm: number;
    diluted_eps_ttm: number;
    quarterly_earnings_growth: number;
  };
  trading_information: {
    beta: number;
    week_52_change: number;
    week_52_high: number;
    week_52_low: number;
    day_50_moving_average: number;
    day_200_moving_average: number;
    avg_vol_3_month: number;
    avg_vol_10_day: number;
    shares_outstanding: number;
    float: number;
    percent_held_by_insiders: number;
    percent_held_by_institutions: number;
    shares_short: number;
    short_ratio: number;
    short_percent_of_float: number;
    short_percent_of_shares_outstanding: number;
    shares_short_prior_month: number;
  };
  dividend_and_splits: {
    forward_annual_dividend_rate: number;
    forward_annual_dividend_yield: number;
    trailing_annual_dividend_rate: number;
    trailing_annual_dividend_yield: number;
    average_dividend_yield_5_year: number;
    payout_ratio: number;
    dividend_date: string;
    ex_dividend_date: string;
    last_split_factor: string;
    last_split_date: string;
  };
}

export interface InsiderTransactionData {
  symbol: string;
  insider_name: string;
  relation: string;
  last_date: string;
  transaction_type: string;
  owner_type: string;
  shares_traded: number;
  last_price: number;
  shares_held: number;
}

export interface IncomeStatementData {
  symbol: string;
  fiscal_date_ending: string;
  reported_currency: string;
  total_revenue: number;
  total_operating_expense: number;
  cost_of_revenue: number;
  gross_profit: number;
  ebit: number;
  net_income: number;
  research_development: number;
  effect_of_accounting_charges: number;
  income_before_tax: number;
  minority_interest: number;
  net_income_from_continuing_ops: number;
  non_recurring: number;
  other_items: number;
  income_tax_expense: number;
  total_other_income_expense_net: number;
  discontinued_operations: number;
  net_income_applicable_to_common_shares: number;
}

export interface BalanceSheetData {
  symbol: string;
  fiscal_date_ending: string;
  reported_currency: string;
  total_assets: number;
  total_current_assets: number;
  cash_and_cash_equivalents_at_carrying_value: number;
  cash_and_short_term_investments: number;
  inventory: number;
  current_net_receivables: number;
  total_non_current_assets: number;
  property_plant_equipment: number;
  accumulated_depreciation_amortization_ppe: number;
  intangible_assets: number;
  intangible_assets_excluding_goodwill: number;
  goodwill: number;
  investments: number;
  long_term_investments: number;
  short_term_investments: number;
  other_current_assets: number;
  other_non_current_assets: number;
  total_liabilities: number;
  total_current_liabilities: number;
  current_accounts_payable: number;
  deferred_revenue: number;
  current_debt: number;
  short_term_debt: number;
  total_non_current_liabilities: number;
  capital_lease_obligations: number;
  long_term_debt: number;
  current_long_term_debt: number;
  long_term_debt_noncurrent: number;
  short_long_term_debt_total: number;
  other_current_liabilities: number;
  other_non_current_liabilities: number;
  total_shareholder_equity: number;
  treasury_stock: number;
  retained_earnings: number;
  common_stock: number;
  common_stock_shares_outstanding: number;
}

export interface CashFlowData {
  symbol: string;
  fiscal_date_ending: string;
  reported_currency: string;
  operating_cashflow: number;
  payments_for_operating_activities: number;
  proceeds_from_operating_activities: number;
  change_in_operating_liabilities: number;
  change_in_operating_assets: number;
  depreciation_depletion_amortization: number;
  capital_expenditures: number;
  change_in_receivables: number;
  change_in_inventory: number;
  profit_loss: number;
  cashflow_from_investment: number;
  cashflow_from_financing: number;
  proceeds_from_repayments_of_short_term_debt: number;
  payments_for_repurchase_of_common_stock: number;
  payments_for_repurchase_of_equity: number;
  payments_for_repurchase_of_preferred_stock: number;
  dividend_payout: number;
  dividend_payout_common_stock: number;
  dividend_payout_preferred_stock: number;
  proceeds_from_issuance_of_common_stock: number;
  proceeds_from_issuance_of_long_term_debt_and_capital_securities_net: number;
  proceeds_from_issuance_of_preferred_stock: number;
  proceeds_from_repurchase_of_equity: number;
  proceeds_from_sale_of_treasury_stock: number;
  change_in_cash_and_cash_equivalents: number;
  change_in_exchange_rate: number;
  net_income: number;
}

export interface OptionsExpirationData {
  symbol: string;
  expiration_dates: string[];
}

export interface OptionsChainData {
  symbol: string;
  expiration_date: string;
  calls: Array<{
    contract_name: string;
    strike: number;
    currency: string;
    last_price: number;
    change: number;
    percent_change: number;
    volume: number;
    open_interest: number;
    bid: number;
    ask: number;
    contract_size: string;
    last_trade_date: string;
    implied_volatility: number;
    in_the_money: boolean;
  }>;
  puts: Array<{
    contract_name: string;
    strike: number;
    currency: string;
    last_price: number;
    change: number;
    percent_change: number;
    volume: number;
    open_interest: number;
    bid: number;
    ask: number;
    contract_size: string;
    last_trade_date: string;
    implied_volatility: number;
    in_the_money: boolean;
  }>;
}

export interface KeyExecutiveData {
  symbol: string;
  executives: Array<{
    name: string;
    title: string;
    pay: number;
    exercised: number;
    year_born: number;
  }>;
}

export interface FundHolderData {
  symbol: string;
  fund_name: string;
  holder: string;
  shares: number;
  date_reported: string;
  percent_out: number;
  value: number;
}

export interface InstitutionalHolderData {
  symbol: string;
  holder: string;
  shares: number;
  date_reported: string;
  percent_out: number;
  value: number;
}

export interface EarningsEstimateData {
  symbol: string;
  period: string;
  growth: number;
  earnings_estimate_avg: number;
  earnings_estimate_low: number;
  earnings_estimate_high: number;
  earnings_estimate_year_ago_eps: number;
  earnings_estimate_number_of_analysts: number;
  earnings_estimate_growth: number;
  revenue_estimate_avg: number;
  revenue_estimate_low: number;
  revenue_estimate_high: number;
  revenue_estimate_number_of_analysts: number;
  revenue_estimate_year_ago_sales: number;
  revenue_estimate_growth: number;
  eps_trend_current: number;
  eps_trend_7_days_ago: number;
  eps_trend_30_days_ago: number;
  eps_trend_60_days_ago: number;
  eps_trend_90_days_ago: number;
  eps_revisions_up_last_7_days: number;
  eps_revisions_up_last_30_days: number;
  eps_revisions_down_last_7_days: number;
  eps_revisions_down_last_30_days: number;
}

export interface RevenueEstimateData {
  symbol: string;
  period: string;
  growth: number;
  revenue_estimate_avg: number;
  revenue_estimate_low: number;
  revenue_estimate_high: number;
  revenue_estimate_number_of_analysts: number;
  revenue_estimate_year_ago_sales: number;
  revenue_estimate_growth: number;
}

export interface EPSTrendData {
  symbol: string;
  current_quarter: {
    date: string;
    estimate: number;
  };
  next_quarter: {
    date: string;
    estimate: number;
  };
  current_year: {
    date: string;
    estimate: number;
  };
  next_year: {
    date: string;
    estimate: number;
  };
}

export interface EPSRevisionsData {
  symbol: string;
  revisions_up_last_7_days: number;
  revisions_down_last_7_days: number;
  revisions_up_last_30_days: number;
  revisions_down_last_30_days: number;
  revisions_up_last_60_days: number;
  revisions_down_last_60_days: number;
  revisions_up_last_90_days: number;
  revisions_down_last_90_days: number;
}

export interface GrowthEstimatesData {
  symbol: string;
  current_quarter: number;
  next_quarter: number;
  current_year: number;
  next_year: number;
  next_5_years: number;
  past_5_years: number;
  peg_ratio: number;
  price_earnings_to_growth_ratio: number;
}

export interface RecommendationData {
  symbol: string;
  period: string;
  strong_buy: number;
  buy: number;
  hold: number;
  sell: number;
  strong_sell: number;
  mean_recommendation: number;
}

export interface PriceTargetData {
  symbol: string;
  last_updated: string;
  analyst_count: number;
  mean_target: number;
  median_target: number;
  high_target: number;
  low_target: number;
  standard_deviation: number;
  current_price: number;
  currency: string;
}

export interface AnalystRatingData {
  symbol: string;
  exchange: string;
  mic_code: string;
  country: string;
  analyst_ratings_summary: {
    rating: string;
    rating_score: number;
    rating_recommendation: string;
    rating_nb_analysts: number;
  };
  analyst_ratings_details: Array<{
    analyst_name: string;
    analyst_rating: string;
    analyst_rating_score: number;
    analyst_rating_recommendation: string;
    analyst_rating_date: string;
  }>;
}

