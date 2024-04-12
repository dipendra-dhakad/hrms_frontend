import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sidebar: false,
  second_sidebar: false,
};

export const SidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    setSidebar: (state, action) => {
      state.sidebar = action.payload;
    },
    setSecondSidebar: (state, action) => {
      state.second_sidebar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSidebar, setSecondSidebar } = SidebarSlice.actions;

export default SidebarSlice.reducer;
