import { configureStore } from '@reduxjs/toolkit';
import adminSecureItems from './AdminSecureSlice';

export default configureStore({
    reducer: {
        adminSecureItems,
    }
});