import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  hasErrors: false,
  user: null,
};

const authSlice = createSlice({
  name: 'authentication',
  initialState,
  reducers: {
    getCurrentUser: state => {
      state.loading = true;
    },
    getCurrentUserSuccess: (state, action) => {
      state.loading = false;
      state.user = action.payload;
    },
    userSignedOut: state => {
      state.loading = false;
    },
    getCurrentUserFailure: state => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const {
  getCurrentUser,
  getCurrentUserSuccess,
  getCurrentUserFailure,
  userSignedOut,
} = authSlice.actions;
export default authSlice.reducer;
export const userSelector = state => state.user;
