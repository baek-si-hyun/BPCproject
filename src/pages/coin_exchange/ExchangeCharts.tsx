import { createChart, ColorType } from "lightweight-charts";
import { useEffect, useRef } from "react";
import { IChartData } from "../../interface/iExchangeChart";
import { useSelector } from "react-redux";

const ChartComponent = (props: IChartData) => {
  const isDarkMode = useSelector(
    (state: { toggleMode: boolean }) => state.toggleMode
  );

  const { data } = props.chartData;

  const chartContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleResize = () => {
      if (chartContainerRef.current) {
        chart.applyOptions({ width: chartContainerRef.current.clientWidth });
      }
    };

    const chart = createChart(chartContainerRef.current!, {
      layout: {
        background: {
          type: ColorType.Solid,
          color: isDarkMode ? "#3b3b3b" : "#fff",
        },
        textColor: isDarkMode ? "#fff" : "#222",
      },
      rightPriceScale: {
        scaleMargins: {
          top: 0.35,
          bottom: 0.2,
        },
        borderVisible: false,
      },
      timeScale: {
        borderVisible: false,
      },
      watermark: {
        color: "rgba(255, 255, 255,1)",
      },
      grid: {
        vertLines: {
          visible: false,
        },
        horzLines: {
          visible: false,
        },
      },
      crosshair: {
        vertLine: {
          visible: true,
          color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(2, 2, 2, 0.7)",
        },
        horzLine: {
          visible: true,
          color: isDarkMode ? "rgba(255, 255, 255, 0.7)" : "rgba(2, 2, 2, 0.7)",
        },
      },
      width: chartContainerRef.current?.clientWidth ?? 0,
      height: 450,
    });
    chart.timeScale().fitContent();

    const newSeries = chart.addAreaSeries({
      topColor: isDarkMode ? "rgba(150, 0, 0, 0.4)" : "rgba(19, 68, 193, 0.4)",
      bottomColor: isDarkMode ? "rgba(2, 2, 2, 0.0)" : "rgba(0, 120, 255, 0.0)",
      lineColor: isDarkMode ? "rgba(150, 0, 0, 1.0)" : "rgba(19, 40, 153, 1.0)",
      lineWidth: 3,
    });
    newSeries.setData(data);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      if (chartContainerRef.current) {
        chart.remove();
      }
    };
  }, [data, isDarkMode]);

  return <div ref={chartContainerRef} />;
};

function ExchangeCharts(props: IChartData) {
  return <ChartComponent {...props} />;
}

export default ExchangeCharts;
