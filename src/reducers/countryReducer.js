import { createSlice } from "@reduxjs/toolkit";
import { getAll } from "../countryService";

const countrySlice = createSlice({
  name: "countries",
  initialState: [],
  reducers: {
    setAll(state, action) {
      const result = [
        ...action.payload.sort((a, b) => {
          if (b.name.common > a.name.common) return -1;
          else if (b.name.common < a.name.common) return 1;
          else return 0;
        }),
      ];
      return result;
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
