import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./toggleModeSlice";

const store = configureStore({
  reducer: { toggleMode: toggleModeSlice.reducer },
});
export default store;
