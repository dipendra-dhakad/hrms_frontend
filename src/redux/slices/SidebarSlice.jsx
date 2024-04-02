import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    sidebar: false
}

export const SidebarSlice = createSlice({
    name: 'sidebar',
    initialState,
    reducers: {
        setSidebar: (state, action) => {
            state.sidebar = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { setSidebar } = SidebarSlice.actions

export default SidebarSlice.reducer
