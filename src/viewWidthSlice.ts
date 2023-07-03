import { createSlice } from "@reduxjs/toolkit";

const viewWidthSlice = createSlice({
    name: "viewWidthSlice",
    initialState: 0,
    reducers: {
      width: (state, action) => action.payload,
    },
  });
export default viewWidthSlice;
export const { width } = viewWidthSlice.actions;
