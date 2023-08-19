import { TreeMap, TreeMapSeries, TreeMapRect, TreeMapLabel } from "reaviz";
import { mapsData } from "../../api/datalist";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { IMapData } from "../../interface/iMaps";
import { navCoinDetail } from "./common/navigateFn";

const CoinMapContainer = styled.div``;
const CoinMapInner = styled.div``;

function MapDetail() {
  const viewWidth = useSelector(
    (state: { viewWidth: number }) => state.viewWidth
  );
  const { pathname } = useLocation();
  const [mapData, setMapData] = useState<IMapData[]>();

  useEffect(() => {
    const handelMapData = () => {
      const filteredData = mapsData.filter(
        (map) => map.key === pathname.slice(10)
      );
      setMapData(() => filteredData);
    };
    handelMapData();
  }, []);
  const navigate = useNavigate();
  return (
    <CoinMapContainer>
      <CoinMapInner>
        <TreeMap
          width={viewWidth - 16}
          height={viewWidth * 0.7}
          data={mapData}
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
                    // console.log("onMouseEnter", event, data);
                  }}
                  onMouseLeave={(event, data) => {
                    // console.log("onMouseLeave", event, data);
                  }}
                  onClick={(event, data) => {
                    if (data.depth === 2) {
                      navCoinDetail(data, navigate);
                    } else {
                      return;
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

export default MapDetail;
