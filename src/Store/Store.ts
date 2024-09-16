import { configureStore } from "@reduxjs/toolkit";
import { HomeReducer } from "./HomeSlice/HomeSlice";
import { DetailsReducer } from "./DetailsSlice/DetailsSlice";

const store = configureStore({
  reducer: {
    home: HomeReducer,
    Details: DetailsReducer,
  },
});

export type RootStat = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
