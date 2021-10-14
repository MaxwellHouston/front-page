import articlesReducer, { clearArticles } from './articlesSlice';


describe('Articles slice', () => {

    describe('clearArticles reducer', () => {

        it('clears articles from state', () => {

            const prevState = {
                articles: [
                    {key: 'value'},
                    {key: 'value'},
                    {key: 'value'},
                    {key: 'value'}
                ],
                loaded: false,
                isLoading: false,
                hasError: false
            }
            const newState = {
                articles: [],
                loaded: false,
                isLoading: false,
                hasError: false
            }
            expect(articlesReducer(prevState, clearArticles())).toEqual(newState)
        })
    })
})