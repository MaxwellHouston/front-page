import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from '../features/articleLayout/articlesSlice.js';
import topicsSlice from '../features/topics/topicsSlice.js';

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    topics: topicsSlice,
  },
});
