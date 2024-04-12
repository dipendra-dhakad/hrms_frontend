import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  onEdit3: false,
};

export const MyprofileSlice = createSlice({
  name: "myprofile",
  initialState,
  reducers: {
    setOnEdit3: (state, action) => {
      state.onEdit3 = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setOnEdit3 } = MyprofileSlice.actions;

export default MyprofileSlice.reducer;
