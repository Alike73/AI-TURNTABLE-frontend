import { createSlice } from '@reduxjs/toolkit';

export const adminSecureSlice = createSlice({
    name: 'adminSecureItems',

    initialState: {
        adminPass: null,
        isAdmin: false
    },
    reducers: {
        setIsAdmin: (state, action) => {
            state.isAdmin = action.payload;
        },
        setAdminPass: (state, action) => {
            state.adminPass = action.payload;
        },
    },
    
});

export const getAdminPass = state => state.adminSecureItems.adminPass;
export const getAdmin = state => state.adminSecureItems.isAdmin;
export const { setIsAdmin, setAdminPass } = adminSecureSlice.actions;
export default adminSecureSlice.reducer;