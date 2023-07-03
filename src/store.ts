import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./toggleModeSlice";
import viewWidthSlice from "./viewWidthSlice";

const store = configureStore({
  reducer: {
    toggleMode: toggleModeSlice.reducer,
    viewWidth: viewWidthSlice.reducer,
  },
});
export default store;
