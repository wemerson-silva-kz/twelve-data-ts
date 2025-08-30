import TwelveData from './src/index.js';

// Exemplo de uso da biblioteca Twelve Data TypeScript
async function main() {
  // Inicializar cliente (substitua pela sua API key)
  const client = new TwelveData({
    apiKey: 'YOUR_API_KEY_HERE'
  });

  try {
    console.log('🚀 Testando Twelve Data TypeScript Library\n');

    // 1. Buscar símbolos
    console.log('1. Buscando símbolos para "AAPL"...');
    const search = await client.referenceData.symbolSearch({
      symbol: 'AAPL'
    });
    console.log('Resultado:', search.data);
    console.log('');

    // 2. Obter lista de ações
    console.log('2. Obtendo lista de ações da NASDAQ...');
    const stocks = await client.referenceData.getStocksList({
      exchange: 'NASDAQ',
      format: 'json'
    });
    console.log('Primeiras 3 ações:', stocks.data?.slice(0, 3));
    console.log('');

    // 3. Obter cotação em tempo real
    console.log('3. Obtendo cotação da AAPL...');
    const quote = await client.coreData.getQuote({
      symbol: 'AAPL'
    });
    console.log('Cotação:', quote.data);
    console.log('');

    // 4. Obter dados de séries temporais
    console.log('4. Obtendo séries temporais da AAPL (últimos 5 dias)...');
    const timeSeries = await client.coreData.getTimeSeries({
      symbol: 'AAPL',
      interval: '1day',
      outputsize: 5
    });
    console.log('Séries temporais:', timeSeries.data);
    console.log('');

    // 5. Obter RSI (indicador técnico)
    console.log('5. Calculando RSI da AAPL...');
    const rsi = await client.technicalIndicators.getRSI({
      symbol: 'AAPL',
      interval: '1day',
      time_period: 14
    });
    console.log('RSI:', rsi.data);
    console.log('');

    // 6. Obter taxa de câmbio
    console.log('6. Obtendo taxa de câmbio EUR/USD...');
    const exchangeRate = await client.coreData.getExchangeRate({
      symbol: 'EUR/USD'
    });
    console.log('Taxa de câmbio:', exchangeRate.data);
    console.log('');

    // 7. Verificar status do rate limiter
    console.log('7. Status do Rate Limiter:');
    const status = client.getRateLimiterStatus();
    console.log(`Tokens disponíveis: ${status.tokens}`);
    console.log(`Requests na fila: ${status.queueLength}`);
    console.log('');

    console.log('✅ Todos os testes concluídos com sucesso!');

  } catch (error) {
    console.error('❌ Erro durante os testes:', error);
  }
}

// Executar exemplo
if (import.meta.main) {
  main();
}

