import { configureStore } from '@reduxjs/toolkit'
import sidebarReducer from '../slices/SidebarSlice'
import addressReducer from '../slices/MyprofileSlice'
export const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
    myprofile:addressReducer
  },
})
