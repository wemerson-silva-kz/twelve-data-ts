# Twelve Data TypeScript Library

[![npm version](https://badge.fury.io/js/twelve-data-ts.svg)](https://badge.fury.io/js/twelve-data-ts)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A complete TypeScript library for the Twelve Data API with automatic rate limiting and **154 endpoints** covering all financial data categories.

## 🚀 Features

- ✅ **Complete API Coverage**: 154 endpoints across all categories
- ✅ **98 Technical Indicators**: All official Twelve Data technical indicators
- ✅ **Automatic Rate Limiting**: Smart 3000 requests/minute management
- ✅ **Full TypeScript Support**: Complete typing for all endpoints and parameters  
- ✅ **Zero Dependencies**: Uses only native Node.js/Bun APIs
- ✅ **Modern Architecture**: Built for Bun runtime with Node.js compatibility
- ✅ **Production Ready**: 100% test coverage with live API validation

## 📊 API Coverage

| Category | Endpoints | Coverage |
|----------|-----------|----------|
| Reference Data | 9 | ✅ 100% |
| Core Data | 9 | ✅ 100% |
| Mutual Funds | 12 | ✅ 100% |
| Fundamentals | 17 | ✅ 100% |
| Analysis | 9 | ✅ 100% |
| Technical Indicators | 98 | ✅ 100% |
| **Total** | **154** | **✅ 100%** |

## 📦 Installation

```bash
# Using npm
npm install twelve-data-ts

# Using yarn
yarn add twelve-data-ts

# Using bun
bun add twelve-data-ts
```

## 🔑 Quick Start

```typescript
import TwelveData from 'twelve-data-ts';

// Initialize with your API key
const client = new TwelveData({
  apiKey: 'your-rapidapi-key-here'
});

// Get real-time stock price
const quote = await client.coreData.getQuote({
  symbol: 'AAPL'
});

console.log(`AAPL Current Price: $${quote.close}`);
```

## 🛠 Configuration

```typescript
const client = new TwelveData({
  apiKey: 'your-rapidapi-key-here',
  baseUrl: 'https://twelve-data1.p.rapidapi.com', // optional
  rateLimit: 3000 // optional, default: 3000 requests/minute
});
```

## 📈 Available Endpoints

### Reference Data (9 endpoints)
```typescript
// Stocks list with filtering
const stocks = await client.referenceData.getStocksList({
  exchange: 'NASDAQ',
  country: 'United States'
});

// Forex pairs
const forexPairs = await client.referenceData.getForexPairsList();

// Cryptocurrencies
const cryptos = await client.referenceData.getCryptocurrenciesList();

// ETFs list
const etfs = await client.referenceData.getETFsList();

// Symbol search
const search = await client.referenceData.symbolSearch({
  symbol: 'AAPL'
});
```

### Core Data (9 endpoints)
```typescript
// Time series data
const timeSeries = await client.coreData.getTimeSeries({
  symbol: 'AAPL',
  interval: '1day',
  outputsize: 100
});

// Real-time quote
const quote = await client.coreData.getQuote({
  symbol: 'AAPL'
});

// Exchange rates
const exchangeRate = await client.coreData.getExchangeRate({
  symbol: 'EUR/USD'
});

// Market movers
const stockMovers = await client.coreData.getMarketMoversStocks();
```

### Technical Indicators (98 endpoints)
```typescript
// RSI (Relative Strength Index)
const rsi = await client.technicalIndicators.getRSI({
  symbol: 'AAPL',
  interval: '1day',
  time_period: 14
});

// MACD
const macd = await client.technicalIndicators.getMACD({
  symbol: 'AAPL',
  interval: '1day',
  fastperiod: 12,
  slowperiod: 26,
  signalperiod: 9
});

// Bollinger Bands
const bbands = await client.technicalIndicators.getBBANDS({
  symbol: 'AAPL',
  interval: '1day',
  time_period: 20
});

// All 98 official indicators available...
```

### Fundamentals (17 endpoints)
```typescript
// Income statement
const income = await client.fundamentals.getIncomeStatement({
  symbol: 'AAPL'
});

// Balance sheet
const balance = await client.fundamentals.getBalanceSheet({
  symbol: 'AAPL'
});

// Cash flow
const cashFlow = await client.fundamentals.getCashFlow({
  symbol: 'AAPL'
});
```

### Mutual Funds (12 endpoints)
```typescript
// Mutual fund list
const funds = await client.mutualFunds.getMutualFundsList();

// Fund family
const family = await client.mutualFunds.getMutualFundFamily({
  symbol: 'VTSAX'
});
```

### Analysis (9 endpoints)
```typescript
// Analyst recommendations
const recommendations = await client.analysis.getAnalystRecommendations({
  symbol: 'AAPL'
});

// Price target
const target = await client.analysis.getPriceTarget({
  symbol: 'AAPL'
});
```

## ⚡ Rate Limiting

Automatic intelligent rate limiting with token bucket algorithm:

```typescript
// Check rate limiter status
const status = client.getRateLimiterStatus();
console.log(`Available tokens: ${status.tokens}`);
console.log(`Queue length: ${status.queueLength}`);

// Reset if needed
client.resetRateLimiter();
```

## 🔒 TypeScript Support

Full TypeScript support with comprehensive type definitions:

```typescript
import type { 
  TimeSeriesParams, 
  TimeSeriesData, 
  QuoteData,
  Interval,
  TechnicalIndicatorParams
} from 'twelve-data-ts';

const params: TimeSeriesParams = {
  symbol: 'AAPL',
  interval: '1day' as Interval,
  outputsize: 30
};
```

## 🛡 Error Handling

Robust error handling with detailed error information:

```typescript
try {
  const data = await client.coreData.getTimeSeries({
    symbol: 'AAPL',
    interval: '1day'
  });
  
  if (data.error) {
    console.error('API Error:', data.error);
  } else {
    console.log('Success:', data.data);
  }
} catch (error) {
  console.error('Network Error:', error);
}
```

## 📊 Supported Intervals

- **Minutes**: `1min`, `5min`, `15min`, `30min`, `45min`
- **Hours**: `1h`, `2h`, `4h`  
- **Days**: `1day`, `1week`, `1month`

## 🔧 Requirements

- **Node.js**: >= 16.0.0
- **TypeScript**: >= 5.0.0
- **API Key**: Twelve Data API key (via RapidAPI)

## 📝 Getting Your API Key

1. Sign up at [RapidAPI](https://rapidapi.com/)
2. Subscribe to [Twelve Data API](https://rapidapi.com/twelvedata/api/twelve-data1/)
3. Copy your API key from the dashboard
4. Use it in the library configuration

## 🧪 Testing

The library includes comprehensive tests covering all 154 endpoints:

```bash
# Run tests
bun test

# Run comprehensive API test
bun run api-test.ts
```

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

- 🐛 Issues: [GitHub Issues](https://github.com/wemerson-silva-kz/twelve-data-ts/issues)
- 📖 Rapid Ap: [Api](https://rapidapi.com/twelve-data1-twelve-data-default/api/twelve-data1)
- 📖 Documentation: [API Documentation](https://twelvedata.com/docs)

## ⭐ Show your support

Give a ⭐️ if this project helped you!
