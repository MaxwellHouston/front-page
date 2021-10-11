import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topics: [],
    articles: []
};

const articlesSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {
        submitTopics: (state, action) =>{
            state.topics = action.payload;
        },
    }
})


export const { submitTopics } = articlesSlice.actions;
export default articlesSlice.reducer;