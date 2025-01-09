import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  data: [],
  loading: false
};

export const getData = createAsyncThunk("Get Data", () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((res) => res);
});

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementByAmount: (state, action) => {
      state.count = state.count + action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
        state.data.push(action.payload)
    })
  }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
