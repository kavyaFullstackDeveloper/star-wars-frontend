// src/slices/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: { token: null },
  reducers: {
    setUser(state, action) {
      state.token = action.payload.token;
    },
    clearUser(state) {
      state.token = null;
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
