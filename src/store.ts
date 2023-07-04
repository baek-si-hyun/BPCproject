import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./redux/toggleModeSlice";
import viewWidthSlice from "./redux/viewWidthSlice";

const store = configureStore({
  reducer: {
    toggleMode: toggleModeSlice.reducer,
    viewWidth: viewWidthSlice.reducer,
  },
});
export default store;
