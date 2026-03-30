import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  industry: null,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.industry = action.payload.industry || null;
      state.isAuthenticated = true;
    },
    setIndustry: (state, action) => {
      state.industry = action.payload;
      if (state.user) {
        state.user.industry = action.payload;
      }
    },
    logout: (state) => {
      state.user = null;
      state.industry = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, setIndustry, logout } = userSlice.actions;
export default userSlice.reducer;
