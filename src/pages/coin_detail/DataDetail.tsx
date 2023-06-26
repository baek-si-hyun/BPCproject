/* eslint-disable jsx-a11y/anchor-has-content */
import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const DataDetailContainer = styled.div``;
const DataDetailInner = styled.div`
  height: 90vh;
`;

function DataDetail() {
  const isDarkMode = useSelector(
    (state: { toggleMode: boolean }) => state.toggleMode
  );

  let tvScriptLoadingPromise: Promise<void>;
  const onLoadScriptRef = useRef<(() => void) | null>();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = () => resolve();
        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => {
      onLoadScriptRef.current = null;
    };
  }, [isDarkMode]);

  function createWidget(): void {
    if (
      document.getElementById("tradingview_e032d") &&
      "TradingView" in window
    ) {
      new window.TradingView.widget({
        autosize: true,
        symbol: "BINANCE:BTCUSDT",
        interval: "D",
        timezone: "Asia/Seoul",
        theme: isDarkMode ? "dark" : "light",
        style: "1",
        locale: "kr",
        toolbar_bg: isDarkMode ? "#000" : "#fff",
        enable_publishing: false,
        allow_symbol_change: false,
        hide_side_toolbar: false,
        details: true,
        container_id: "tradingview_e032d",
      });
    }
  }

  return (
    <DataDetailContainer className="tradingview-widget-container">
      <DataDetailInner id="tradingview_e032d" />
      <div className="tradingview-widget-copyright">
        <a
          href="https://kr.tradingview.com/"
          rel="noopener nofollow noreferrer"
          target="_blank"
        ></a>
      </div>
    </DataDetailContainer>
  );
}

export default DataDetail;
