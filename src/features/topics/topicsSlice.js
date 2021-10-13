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
    }
})


export const { submitTopics } = topicsSlice.actions;
export default topicsSlice.reducer;