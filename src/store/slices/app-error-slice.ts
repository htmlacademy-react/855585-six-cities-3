import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppErrorState {
  error: string | null;
}

const initialState: AppErrorState = {
  error: null,
};

const appErrorSlice = createSlice({
  name: 'app-error',
  initialState,
  reducers: {
    setError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
  },
});

export const { setError } = appErrorSlice.actions;
export default appErrorSlice.reducer;
