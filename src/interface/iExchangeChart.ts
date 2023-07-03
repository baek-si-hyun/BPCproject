export interface IExchangeChart {
  exchange: string;
  history: { time: string; value: number }[];
}
declare global {
  interface Window {
    TradingView: any;
  }
}
export interface IChartData {
  chartData: { data: { time: string; value: number }[] };
}
