import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // initial state for using in reducers
  custom_type: '',
  next_node:{},
};

//making slice
export const firstSlice = createSlice({
  name: "nodeSlice",
  initialState,
  
  reducers: {
    addToSlice: (state, action) => {
      
      state.next_node = action.payload;
    },
    
  },
});

export const { addToSlice } = firstSlice.actions;

export default firstSlice.reducer;
