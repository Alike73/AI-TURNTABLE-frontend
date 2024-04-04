import { configureStore } from '@reduxjs/toolkit';
import adminSecureItems from './AdminSecureSlice';
import vinylRecordItems from './VinylRecordSlice';

export default configureStore({
    reducer: {
        adminSecureItems,
        vinylRecordItems,
    }
});