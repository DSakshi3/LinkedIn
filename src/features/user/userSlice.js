import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: null
};


export const userSlice = createSlice({
  name: 'user',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    logout: (state, action) => {
      state.value = null;
    },
  }
});

export const { login, logout } = userSlice.actions;

export const selectUser = (state) => (state.user)? state.user.value: null;

export default userSlice.reducer;
