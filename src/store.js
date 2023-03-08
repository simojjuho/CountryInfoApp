import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./reducers/countryReducer";

const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

export default store;
