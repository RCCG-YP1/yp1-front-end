import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: null,
  error: null,
  isLoading: false
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    setLoading: (state) => {
      state.isLoading = true;
    }
  }
});

export const { setCity, setError, setLoading } = locationSlice.actions;
export default locationSlice.reducer;