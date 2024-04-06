import { configureStore } from '@reduxjs/toolkit';
import adminSecureItems from './AdminSecureSlice';
import vinylRecordItems from './VinylRecordSlice';
import audioItems from './AudioSlice';

export default configureStore({
    reducer: {
        adminSecureItems,
        vinylRecordItems,
        audioItems,
    }
});