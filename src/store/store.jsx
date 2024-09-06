
import { configureStore } from '@reduxjs/toolkit'
import firstSlice from './features/first/firstSlice';
 export const Store = configureStore({
    reducer:firstSlice
 });

