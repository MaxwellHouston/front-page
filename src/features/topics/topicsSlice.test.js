import topicsReducer, { submitTopics } from './topicsSlice';


describe('Submit topics reducer', () => {

    it('should add single topic to empty list', () => {
        let prevState = { topics: []};
        expect(topicsReducer(prevState, submitTopics(['cars']))).toEqual(
            {
                topics: ['cars']
            }
        ) 
    })

    it('should add multiple topics to empty list', () => {
        let prevState = { topics: []};
        expect(topicsReducer(prevState, submitTopics(['cars','sports','cats','fashion']))).toEqual(
            {
                topics: ['cars','sports','cats','fashion']
            }
        ) 
    })

    it('should overwrite previous topics with new set', () => {
        let prevState = { topics: ['animals', 'sports', 'games', 'news']};
        expect(topicsReducer(prevState, submitTopics(['cars','sports','cats','fashion']))).toEqual(
            {
                topics: ['cars','sports','cats','fashion']
            }
        ) 
    })
})