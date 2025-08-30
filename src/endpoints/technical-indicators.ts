import type { HttpClient } from '../utils/http-client.js';
import type { TechnicalIndicatorParams, ApiResponse } from '../types/index.js';

/**
 * Technical Indicators endpoints for Twelve Data API
 * Implements all 98 official technical indicators from the Twelve Data API
 */
export class TechnicalIndicatorsEndpoints {
  constructor(private httpClient: HttpClient) {}

  /**
   * AD - AD Technical Indicator
   */
  async getAD(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ad', params);
  }
  /**
   * ADD - ADD Technical Indicator
   */
  async getADD(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/add', params);
  }
  /**
   * ADOSC - ADOSC Technical Indicator
   */
  async getADOSC(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/adosc', params);
  }
  /**
   * ADX - ADX Technical Indicator
   */
  async getADX(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/adx', params);
  }
  /**
   * ADXR - ADXR Technical Indicator
   */
  async getADXR(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/adxr', params);
  }
  /**
   * APO - APO Technical Indicator
   */
  async getAPO(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/apo', params);
  }
  /**
   * AROON - AROON Technical Indicator
   */
  async getAROON(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/aroon', params);
  }
  /**
   * AROONOSC - AROONOSC Technical Indicator
   */
  async getAROONOSC(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/aroonosc', params);
  }
  /**
   * ATR - ATR Technical Indicator
   */
  async getATR(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/atr', params);
  }
  /**
   * AVG - AVG Technical Indicator
   */
  async getAVG(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/avg', params);
  }
  /**
   * AVGPRICE - AVGPRICE Technical Indicator
   */
  async getAVGPRICE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/avgprice', params);
  }
  /**
   * BBANDS - BBANDS Technical Indicator
   */
  async getBBANDS(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/bbands', params);
  }
  /**
   * BETA - BETA Technical Indicator
   */
  async getBETA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/beta', params);
  }
  /**
   * BOP - BOP Technical Indicator
   */
  async getBOP(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/bop', params);
  }
  /**
   * CCI - CCI Technical Indicator
   */
  async getCCI(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/cci', params);
  }
  /**
   * CEIL - CEIL Technical Indicator
   */
  async getCEIL(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ceil', params);
  }
  /**
   * CMO - CMO Technical Indicator
   */
  async getCMO(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/cmo', params);
  }
  /**
   * COPPOCK - COPPOCK Technical Indicator
   */
  async getCOPPOCK(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/coppock', params);
  }
  /**
   * CORREL - CORREL Technical Indicator
   */
  async getCORREL(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/correl', params);
  }
  /**
   * CRSI - CRSI Technical Indicator
   */
  async getCRSI(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/crsi', params);
  }
  /**
   * DEMA - DEMA Technical Indicator
   */
  async getDEMA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/dema', params);
  }
  /**
   * DIV - DIV Technical Indicator
   */
  async getDIV(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/div', params);
  }
  /**
   * DPO - DPO Technical Indicator
   */
  async getDPO(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/dpo', params);
  }
  /**
   * DX - DX Technical Indicator
   */
  async getDX(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/dx', params);
  }
  /**
   * EMA - EMA Technical Indicator
   */
  async getEMA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ema', params);
  }
  /**
   * EXP - EXP Technical Indicator
   */
  async getEXP(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/exp', params);
  }
  /**
   * FLOOR - FLOOR Technical Indicator
   */
  async getFLOOR(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/floor', params);
  }
  /**
   * HEIKINASHICANDLES - HEIKINASHICANDLES Technical Indicator
   */
  async getHEIKINASHICANDLES(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/heikinashicandles', params);
  }
  /**
   * HLC3 - HLC3 Technical Indicator
   */
  async getHLC3(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/hlc3', params);
  }
  /**
   * HT_DCPERIOD - HT_DCPERIOD Technical Indicator
   */
  async getHT_DCPERIOD(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ht_dcperiod', params);
  }
  /**
   * HT_DCPHASE - HT_DCPHASE Technical Indicator
   */
  async getHT_DCPHASE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ht_dcphase', params);
  }
  /**
   * HT_PHASOR - HT_PHASOR Technical Indicator
   */
  async getHT_PHASOR(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ht_phasor', params);
  }
  /**
   * HT_SINE - HT_SINE Technical Indicator
   */
  async getHT_SINE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ht_sine', params);
  }
  /**
   * HT_TRENDLINE - HT_TRENDLINE Technical Indicator
   */
  async getHT_TRENDLINE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ht_trendline', params);
  }
  /**
   * HT_TRENDMODE - HT_TRENDMODE Technical Indicator
   */
  async getHT_TRENDMODE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ht_trendmode', params);
  }
  /**
   * ICHIMOKU - ICHIMOKU Technical Indicator
   */
  async getICHIMOKU(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ichimoku', params);
  }
  /**
   * KAMA - KAMA Technical Indicator
   */
  async getKAMA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/kama', params);
  }
  /**
   * KELTNER - KELTNER Technical Indicator
   */
  async getKELTNER(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/keltner', params);
  }
  /**
   * KST - KST Technical Indicator
   */
  async getKST(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/kst', params);
  }
  /**
   * LINEARREG - LINEARREG Technical Indicator
   */
  async getLINEARREG(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/linearreg', params);
  }
  /**
   * LINEARREGANGLE - LINEARREGANGLE Technical Indicator
   */
  async getLINEARREGANGLE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/linearregangle', params);
  }
  /**
   * LINEARREGINTERCEPT - LINEARREGINTERCEPT Technical Indicator
   */
  async getLINEARREGINTERCEPT(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/linearregintercept', params);
  }
  /**
   * LINEARREGSLOPE - LINEARREGSLOPE Technical Indicator
   */
  async getLINEARREGSLOPE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/linearregslope', params);
  }
  /**
   * LN - LN Technical Indicator
   */
  async getLN(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ln', params);
  }
  /**
   * LOG10 - LOG10 Technical Indicator
   */
  async getLOG10(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/log10', params);
  }
  /**
   * MA - MA Technical Indicator
   */
  async getMA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ma', params);
  }
  /**
   * MACD - MACD Technical Indicator
   */
  async getMACD(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/macd', params);
  }
  /**
   * MACDEXT - MACDEXT Technical Indicator
   */
  async getMACDEXT(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/macdext', params);
  }
  /**
   * MAMA - MAMA Technical Indicator
   */
  async getMAMA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/mama', params);
  }
  /**
   * MAX - MAX Technical Indicator
   */
  async getMAX(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/max', params);
  }
  /**
   * MAXINDEX - MAXINDEX Technical Indicator
   */
  async getMAXINDEX(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/maxindex', params);
  }
  /**
   * MCGINLEY_DYNAMIC - MCGINLEY_DYNAMIC Technical Indicator
   */
  async getMCGINLEY_DYNAMIC(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/mcginley_dynamic', params);
  }
  /**
   * MEDPRICE - MEDPRICE Technical Indicator
   */
  async getMEDPRICE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/medprice', params);
  }
  /**
   * MFI - MFI Technical Indicator
   */
  async getMFI(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/mfi', params);
  }
  /**
   * MIDPOINT - MIDPOINT Technical Indicator
   */
  async getMIDPOINT(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/midpoint', params);
  }
  /**
   * MIDPRICE - MIDPRICE Technical Indicator
   */
  async getMIDPRICE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/midprice', params);
  }
  /**
   * MIN - MIN Technical Indicator
   */
  async getMIN(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/min', params);
  }
  /**
   * MININDEX - MININDEX Technical Indicator
   */
  async getMININDEX(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/minindex', params);
  }
  /**
   * MINMAX - MINMAX Technical Indicator
   */
  async getMINMAX(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/minmax', params);
  }
  /**
   * MINMAXINDEX - MINMAXINDEX Technical Indicator
   */
  async getMINMAXINDEX(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/minmaxindex', params);
  }
  /**
   * MINUS_DI - MINUS_DI Technical Indicator
   */
  async getMINUS_DI(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/minus_di', params);
  }
  /**
   * MINUS_DM - MINUS_DM Technical Indicator
   */
  async getMINUS_DM(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/minus_dm', params);
  }
  /**
   * MOM - MOM Technical Indicator
   */
  async getMOM(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/mom', params);
  }
  /**
   * MULT - MULT Technical Indicator
   */
  async getMULT(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/mult', params);
  }
  /**
   * NATR - NATR Technical Indicator
   */
  async getNATR(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/natr', params);
  }
  /**
   * OBV - OBV Technical Indicator
   */
  async getOBV(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/obv', params);
  }
  /**
   * PERCENT_B - PERCENT_B Technical Indicator
   */
  async getPERCENT_B(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/percent_b', params);
  }
  /**
   * PLUS_DI - PLUS_DI Technical Indicator
   */
  async getPLUS_DI(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/plus_di', params);
  }
  /**
   * PLUS_DM - PLUS_DM Technical Indicator
   */
  async getPLUS_DM(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/plus_dm', params);
  }
  /**
   * PPO - PPO Technical Indicator
   */
  async getPPO(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ppo', params);
  }
  /**
   * ROC - ROC Technical Indicator
   */
  async getROC(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/roc', params);
  }
  /**
   * ROCP - ROCP Technical Indicator
   */
  async getROCP(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/rocp', params);
  }
  /**
   * ROCR - ROCR Technical Indicator
   */
  async getROCR(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/rocr', params);
  }
  /**
   * ROCR100 - ROCR100 Technical Indicator
   */
  async getROCR100(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/rocr100', params);
  }
  /**
   * RSI - RSI Technical Indicator
   */
  async getRSI(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/rsi', params);
  }
  /**
   * SAR - SAR Technical Indicator
   */
  async getSAR(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/sar', params);
  }
  /**
   * SAREXT - SAREXT Technical Indicator
   */
  async getSAREXT(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/sarext', params);
  }
  /**
   * SMA - SMA Technical Indicator
   */
  async getSMA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/sma', params);
  }
  /**
   * SQRT - SQRT Technical Indicator
   */
  async getSQRT(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/sqrt', params);
  }
  /**
   * STDDEV - STDDEV Technical Indicator
   */
  async getSTDDEV(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/stddev', params);
  }
  /**
   * STOCH - STOCH Technical Indicator
   */
  async getSTOCH(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/stoch', params);
  }
  /**
   * STOCHF - STOCHF Technical Indicator
   */
  async getSTOCHF(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/stochf', params);
  }
  /**
   * STOCHRSI - STOCHRSI Technical Indicator
   */
  async getSTOCHRSI(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/stochrsi', params);
  }
  /**
   * SUB - SUB Technical Indicator
   */
  async getSUB(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/sub', params);
  }
  /**
   * SUM - SUM Technical Indicator
   */
  async getSUM(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/sum', params);
  }
  /**
   * SUPERTREND - SUPERTREND Technical Indicator
   */
  async getSUPERTREND(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/supertrend', params);
  }
  /**
   * T3MA - T3MA Technical Indicator
   */
  async getT3MA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/t3ma', params);
  }
  /**
   * TEMA - TEMA Technical Indicator
   */
  async getTEMA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/tema', params);
  }
  /**
   * TRANGE - TRANGE Technical Indicator
   */
  async getTRANGE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/trange', params);
  }
  /**
   * TRIMA - TRIMA Technical Indicator
   */
  async getTRIMA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/trima', params);
  }
  /**
   * TSF - TSF Technical Indicator
   */
  async getTSF(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/tsf', params);
  }
  /**
   * TYPPRICE - TYPPRICE Technical Indicator
   */
  async getTYPPRICE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/typprice', params);
  }
  /**
   * ULTOSC - ULTOSC Technical Indicator
   */
  async getULTOSC(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/ultosc', params);
  }
  /**
   * VAR - VAR Technical Indicator
   */
  async getVAR(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/var', params);
  }
  /**
   * VWAP - VWAP Technical Indicator
   */
  async getVWAP(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/vwap', params);
  }
  /**
   * WCLPRICE - WCLPRICE Technical Indicator
   */
  async getWCLPRICE(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/wclprice', params);
  }
  /**
   * WILLR - WILLR Technical Indicator
   */
  async getWILLR(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/willr', params);
  }
  /**
   * WMA - WMA Technical Indicator
   */
  async getWMA(params: TechnicalIndicatorParams): Promise<ApiResponse<any>> {
    return this.httpClient.get('/wma', params);
  }
}
