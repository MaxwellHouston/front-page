import { configureStore } from '@reduxjs/toolkit';
import articlesSlice from '../features/articleLayout/articlesSlice.js';
import settingsSlice from '../features/settings/settingsSlice.js';
import topicsSlice from '../features/topics/topicsSlice.js';

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
    topics: topicsSlice,
    settings: settingsSlice
  },
});

export const testStore = configureStore({
  reducer: {
    articles: articlesSlice,
    topics: topicsSlice,
    settings: settingsSlice
  },
});