import settingsReducer, { toggleSettings, toggleTopics } from './settingsSlice';

describe('Settings Slice', () => {
    describe('Toggle topics reducer', () => {
    
    it('changes topics rendered from false to true', () => {
        const prevState = {
            topicsRendered: false,
            settingsRendered: false
        }
        const newState = {
            topicsRendered: true,
            settingsRendered: false
        };
        expect(settingsReducer(prevState, toggleTopics())).toEqual(newState);
    })

    it('changes topics rendered from true to false', () => {
        const prevState = {
            topicsRendered: true,
            settingsRendered: false
        }
        const newState = {
            topicsRendered: false,
            settingsRendered: false
        };
        expect(settingsReducer(prevState, toggleTopics())).toEqual(newState);
    })
    })
    describe('Toggle settings reducer', () => {

    it('changes settings rendered from false to true', () => {
        const prevState = {
            topicsRendered: false,
            settingsRendered: false
        }
        const newState = {
            topicsRendered: false,
            settingsRendered: true
        };
        expect(settingsReducer(prevState, toggleSettings())).toEqual(newState);
    })

    it('changes settings rendered from true to false', () => {
        const prevState = {
            topicsRendered: false,
            settingsRendered: true
        }
        const newState = {
            topicsRendered: false,
            settingsRendered: false
        };
        expect(settingsReducer(prevState, toggleSettings())).toEqual(newState);
    })
    })
})