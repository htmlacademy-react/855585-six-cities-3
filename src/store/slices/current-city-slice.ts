import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cities } from '../../const';

interface CurrentCityState {
  city: string;
}

const initialState: CurrentCityState = {
  city: cities[0],
};

const currentCitySlice = createSlice({
  name: 'current-city',
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>) {
      state.city = action.payload;
    },
  },
});

export const { setCity } = currentCitySlice.actions;
export default currentCitySlice.reducer;
