
import { configureStore } from '@reduxjs/toolkit'
import songSlice from '../features/song/songSlice'
export const store = configureStore({
reducer: {song:songSlice}
})