import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { fetchCoins } from "../../datalist";
import { ICoin } from "../../interface/iCoinList";
import { Link } from "react-router-dom";

const CoinDataContainer = styled.div`
  margin-top: 0.5rem;
`;

const CoinDataInner = styled.header`
  display: flex;
  flex-direction: column;
`;
const SelectBox = styled.div``;
const ListBox = styled.div``;
const CoinsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;
const Coin = styled.li`
  background-color: ${(props) => props.theme.cardColor};
  will-change: background-color;
  border-radius: 8px;
  box-shadow: 0 0.2rem 0.5rem rgba(0, 0, 0, 0.15);
  padding: 0.5rem 1rem;
`;
const GoDetail = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const Img = styled.img`
  max-width: 45px;
`;
const CoinName = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
`;
function CoinData() {
  const { data } = useQuery<ICoin[]>(["allCoins"], fetchCoins);
  return (
    <CoinDataContainer>
      <CoinDataInner>
        <SelectBox />
        <ListBox>
          <CoinsList>
            {data?.slice(0, 100).map((coin) => (
              <Coin key={coin.id}>
                <GoDetail to={`/coin-detail/BINANCE:${coin.symbol}USDT`}>
                  <Img
                    src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`}
                    loading="lazy"
                    decoding="async"
                  />
                  <CoinName>{coin.name}</CoinName>
                </GoDetail>
              </Coin>
            ))}
          </CoinsList>
        </ListBox>
      </CoinDataInner>
    </CoinDataContainer>
  );
}

export default CoinData;
