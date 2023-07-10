import styled from "styled-components";
import ExchangeCharts from "./ExchangeCharts";
import { exchangeChartData } from "../../datalist";

const CoinExchangeContainer = styled.div``;
const CoinExchangeInner = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;
export const ExchangeChartContainer = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
`;
const ExchangeChartInner = styled.div`
  background-color: transparent;
`;
const ExchangeChartHeader = styled.div`
  display: flex;
`;
const ChartInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const ExchangeName = styled.div`
  text-transform: uppercase;
  font-size: 26px;
`;
const SeletedCoin = styled.div`
  font-size: 22px;
`;
function CoinExchange() {
  return (
    <CoinExchangeContainer>
      <CoinExchangeInner>
        {exchangeChartData &&
          exchangeChartData.map((item, index) => (
            <ExchangeChartContainer key={index}>
              <ExchangeChartInner>
                <ExchangeChartHeader>
                  <ChartInformation>
                    <ExchangeName>{item.exchange}</ExchangeName>
                    <SeletedCoin>BitCoin</SeletedCoin>
                  </ChartInformation>
                </ExchangeChartHeader>
                <ExchangeCharts
                  key={index}
                  chartData={{
                    data: item.history,
                  }}
                />
              </ExchangeChartInner>
            </ExchangeChartContainer>
          ))}
      </CoinExchangeInner>
    </CoinExchangeContainer>
  );
}

export default CoinExchange;
