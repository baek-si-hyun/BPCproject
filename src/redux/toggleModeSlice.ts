import { createSlice } from "@reduxjs/toolkit";

const toggleModeSlice = createSlice({
  name: "toggleModeSlice",
  initialState: false,
  reducers: {
    toggle: (state) => !state, 
  },
});
export default toggleModeSlice
export const {toggle} = toggleModeSlice.actions