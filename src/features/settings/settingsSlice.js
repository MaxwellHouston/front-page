import { createSlice } from "@reduxjs/toolkit";


export const isTopicsRendered = state => state.settings.topicsRendered;
export const isSettingsRendered = state => state.settings.settingsRendered;
export const isDarkMode = state => state.settings.darkMode;




const settingsSlice = createSlice({
    name: 'settings',
    initialState: {
        topicsRendered: true,
        settingsRendered: false,
        darkMode: false
    },
    reducers: {
        toggleTopics: (state) => {
            state.topicsRendered = !state.topicsRendered;
        },
        toggleSettings: (state) => {
            state.settingsRendered = !state.settingsRendered;
        },
        toggleDarkMode: (state) => {
            state.darkMode = ! state.darkMode;
        }
    }
})

export const { toggleSettings, toggleTopics, toggleDarkMode } = settingsSlice.actions;
export default settingsSlice.reducer;