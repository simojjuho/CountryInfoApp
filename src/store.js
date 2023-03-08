import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./reducers/countryReducer";
import filterReducer from "./reducers/filterReducer";

const store = configureStore({
  reducer: {
    countries: countryReducer,
    filter: filterReducer,
  },
});

export default store;
