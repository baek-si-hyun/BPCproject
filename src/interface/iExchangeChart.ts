export interface IExchangeChart {
  id: string;
  chartdata: { value: number; time: string };
}
declare global {
  interface Window {
    TradingView: any;
  }
}
export interface IChartData {
  chartData: { data: { time: string; value: number }[] };
}
