import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "./reducers/countryReducer";
import headingReducer from "./reducers/headingReducer";

const store = configureStore({
  reducer: {
    countries: countryReducer,
    heading: headingReducer,
  },
});

export default store;
