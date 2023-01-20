import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  users: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUsers } = userSlice.actions;

export default userSlice.reducer;
