import { createSlice } from '@reduxjs/toolkit';

export const vinylRecordSlice = createSlice({
    name: 'vinylRecordItems',

    initialState: {
        vinylCover: null,
        vinylTitle: null,
        vinylCategory: 'ALL',
        vinylRecordLink: null,
        fadeViny: false,
    },
    reducers: {
        setVinylCover: (state, action) => {
            state.vinylCover = action.payload;
        },
        setVinylTitle: (state, action) => {
            state.vinylTitle = action.payload;
        },
        setVinylCategory: (state, action) => {
            state.vinylCategory = action.payload;
        },
        setVinylRecordLink: (state, action) => {
            state.vinylRecordLink = action.payload;
        },
        setFadeVinyl: (state, action) => {
            state.fadeViny = action.payload;
        },
    },
    
});

export const getVinylCover = state => state.vinylRecordItems.vinylCover;
export const getVinylTitle = state => state.vinylRecordItems.vinylTitle;
export const getVinylCategory = state => state.vinylRecordItems.vinylCategory;
export const getVinylRecordLink = state => state.vinylRecordItems.vinylRecordLink;
export const getFadeVinyl = state => state.vinylRecordItems.fadeViny;
export const { setVinylCover, setVinylTitle, setVinylCategory, setVinylRecordLink, setFadeVinyl } = vinylRecordSlice.actions;
export default vinylRecordSlice.reducer;