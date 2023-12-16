import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  cursorStyle: "default",
};

// Slice
export const cursorSlice = createSlice({
  name: "cursor",
  initialState,
  reducers: {
    setCursorStyle: (state, action) => {
      state.cursorStyle = action.payload;
    },
  },
});

export const { setCursorStyle } = cursorSlice.actions;
export default cursorSlice.reducer;
