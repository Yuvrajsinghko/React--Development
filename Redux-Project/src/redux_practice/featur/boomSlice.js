import { createSlice } from "@reduxjs/toolkit";

export const counterBoomSlice = createSlice({
  name: "Inhancer",
  initialState: {
    value: 0,
  },
  reducers: {
    numInc: (state) => {
      state.value += 1;
    },
    numDec: (state) => {
      state.value -= 1;
    },
    numIncByValue:(state,actions)=>{
        state.value += actions.payload
    }
  },
});

export const { numInc, numDec,numIncByValue } = counterBoomSlice.actions;
export default counterBoomSlice.reducer;
