import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../countryService";

const countrySlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {
    setAll(state, action) {
      return action.payload;
    },
  },
});

export const getCountries = () => {
  return async (dispatch) => {
    const result = await getAll();
    dispatch(setAll(result));
  };
};

export const { setAll } = countrySlice.actions;
export default countrySlice.reducer;
