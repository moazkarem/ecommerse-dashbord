import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  usersData: [],
};
export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUsersAction: (state, action) => {
      state.usersData = action.payload;
    },
  },
});
export const { setUsersAction } = usersSlice.actions;

export default usersSlice.reducer;
