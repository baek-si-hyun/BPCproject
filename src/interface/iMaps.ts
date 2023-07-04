export interface IMapsData {
  data: {
    key: string;
    data: number;
    symbol: string;
    unit: string;
  };
  parent: { data: { key: string } };
}

export interface IMapData {
  key: string;
  data: { key: string; data: number; symbol: string; unit: string }[];
}
// export interface IMapsData {
//   key: string;
//   data: {
//     key: string;
//     data: number;
//     symbol: string;
//     unit: string;
//   }[];
// }

// export interface IMapData {
//   key: string;
//   data: { key: string; data: number; symbol: string; unit: string }[];
// }
