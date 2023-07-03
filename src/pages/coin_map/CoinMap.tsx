import { TreeMap, TreeMapSeries, TreeMapRect, TreeMapLabel } from "reaviz";
import { mapdata } from "../../datalist";
import styled from "styled-components";
import { useSelector } from "react-redux";

const CoinMapContainer = styled.div``;
const CoinMapInner = styled.div``;

function CoinMap() {
  const viewWidth = useSelector(
    (state: { viewWidth: number }) => state.viewWidth
  );
  return (
    <CoinMapContainer>
      <CoinMapInner>
        <TreeMap
          width={viewWidth}
          height={viewWidth * 0.7}
          data={mapdata}
          series={
            <TreeMapSeries
              label={
                <TreeMapLabel
                  wrap={true}
                  fontSize={16}
                  fontFamily={"Pretendard"}
                  placement={"start"}
                />
              }
              rect={
                <TreeMapRect
                  tooltip={<></>}
                  onMouseEnter={(event, data) => {
                    console.log("onMouseEnter", event, data);
                  }}
                  onMouseLeave={(event, data) => {
                    console.log("onMouseLeave", event, data);
                  }}
                  onClick={(event, data) => {
                    console.log("onClick", event, data);
                    alert(`Clicked ${data.data.key}`);
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
