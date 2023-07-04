import { IMapsData } from "../../../interface/iMaps";

export const navCoinDetail = (data: IMapsData, navigate: any) => {
  const coinid = data.parent.data.key + ":" + data.data.symbol + data.data.unit;
  navigate(`/coin-detail/${coinid}`);
};

export const navMapDetail = (
  data: { data: { key: string } },
  navigate: any
) => {
  const mapId = data.data.key;
  navigate(`/coin-map/${mapId}`);
};
