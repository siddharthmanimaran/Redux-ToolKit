import { createSlice } from "@reduxjs/toolkit";
const initialData = {
  users: ["admin", "end-user", "dev"],
  logIn: "None",
};

const userSlice = createSlice({
  name: "user",
  initialState: initialData,
  reducers: {
    login: (state, action) => {
      state.logIn = action.payload;
    },
  },
});

export const { login } = userSlice.actions;
export default userSlice.reducer;
