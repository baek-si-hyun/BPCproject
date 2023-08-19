import { TreeMap, TreeMapSeries, TreeMapRect, TreeMapLabel } from "reaviz";
import { mapsData } from "../../api/datalist";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { navCoinDetail, navMapDetail } from "./common/navigateFn";

const CoinMapContainer = styled.div``;
const CoinMapInner = styled.div``;

function CoinMap() {
  const viewWidth = useSelector(
    (state: { viewWidth: number }) => state.viewWidth
  );
  const navigate = useNavigate();

  return (
    <CoinMapContainer>
      <CoinMapInner>
        <TreeMap
          width={viewWidth - 16}
          height={viewWidth * 0.7}
          data={mapsData}
          series={
            <TreeMapSeries
              animated={false}
              label={
                <TreeMapLabel
                  wrap={false}
                  fontSize={16}
                  fontFamily={"Pretendard"}
                  placement={"start"}
                />
              }
              rect={
                <TreeMapRect
                  fill="#000000"
                  animated={false}
                  onMouseEnter={(event, data) => {}}
                  onMouseLeave={(event, data) => {
                    // console.log("onMouseLeave", event, data);
                  }}
                  onClick={(event, data) => {
                    if (data.depth === 1) {
                      navMapDetail(data, navigate);
                    }
                    if (data.depth === 2) {
                      navCoinDetail(data, navigate);
                    }
                  }}
                />
              }
            />
          }
        />
      </CoinMapInner>
    </CoinMapContainer>
  );
}

export default CoinMap;
