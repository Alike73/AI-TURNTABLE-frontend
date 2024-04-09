
import { createSlice } from '@reduxjs/toolkit';

export const faqSlice = createSlice({
    name: 'faqItems',

    initialState: {
        showOpenFaqBtn: false,
    },
    reducers: {
        setShowOpenFaqBtn: (state, action) => {
            state.showOpenFaqBtn = action.payload;
        },
    },
    
});

export const getShowOpenFaqBtn = state => state.faqItems.showOpenFaqBtn;

export const { setShowOpenFaqBtn } = faqSlice.actions;
export default faqSlice.reducer;
