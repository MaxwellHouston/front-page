import { createSlice } from "@reduxjs/toolkit";


export const isTopicsRendered = state => state.settings.topicsRendered;
export const isSettingsRendered = state => state.settings.settingsRendered;




const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        topicsRendered: true,
        settingsRendered: false
    },
    reducers: {
        toggleTopics: (state) => {
            state.topicsRendered = !state.topicsRendered;
        },
        toggleSettings: (state) => {
            state.settingsRendered = !state.settingsRendered;
        }
    }
})

export const { toggleSettings, toggleTopics } = settingsSlice.actions;
export default settingsSlice.reducer;