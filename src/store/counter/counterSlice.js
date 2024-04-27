import { createSlice } from "@reduxjs/toolkit";

const initState = {
  value: 0,
};
const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value = state.value + action.payload;
    },
  },
});
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
