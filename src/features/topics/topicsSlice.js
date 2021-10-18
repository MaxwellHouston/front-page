import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    topics: [],
}

export const selectTopics = state => state.topics.topics;

const topicsSlice = createSlice({
    name: 'topics',
    initialState: initialState,
    reducers: {
        submitTopics: (state, action) => {
            state.topics = action.payload;
        },
        clearTopics: (state) => {
            state.topics = [];
        }
    }
})


export const { submitTopics, clearTopics } = topicsSlice.actions;
export default topicsSlice.reducer;