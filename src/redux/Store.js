import { configureStore } from '@reduxjs/toolkit';
import adminSecureItems from './AdminSecureSlice';
import vinylRecordItems from './VinylRecordSlice';
import audioItems from './AudioSlice';
import faqItems from './FAQSlice';

export default configureStore({
    reducer: {
        adminSecureItems,
        vinylRecordItems,
        audioItems,
        faqItems,
    }
});