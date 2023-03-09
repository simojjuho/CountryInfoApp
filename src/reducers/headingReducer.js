import { createSlice } from "@reduxjs/toolkit";

const headingSlice = createSlice({
  name: "heading",
  initialState: "Country Info App",
  reducers: {
    setHeading(state, action) {
      return action.payload;
    },
  },
});

export const changeHeading = (heading) => {
  return (dispatch) => {
    dispatch(setHeading(heading));
  };
};

export const { setHeading } = headingSlice.actions;
export default headingSlice.reducer;
