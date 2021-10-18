import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
//Data and functions
const initialState = {
    articles: [],
    loaded: false,
    isLoading: false,
    hasError: false
};

const fetchArticles = async (subreddit) => {
    const url = `https://www.reddit.com/r/${subreddit}.json`;
    const response = await fetch(url);
    const json = await response.json();
    return json.data.children.slice(2,5);
}

//Exports

export const selectArticles = state => state.articles.articles;
export const articlesLoaded = state => state.articles.loaded;
export const isLoading = state => state.articles.isLoading;


export const loadArticles = createAsyncThunk(
    'articles/loadArticles',
    async (subList) => {
        let ARTICLES = [];
        for(const sub of subList) {
            let list = await fetchArticles(sub);
            list.forEach(article => ARTICLES.push(article))
        }
        return ARTICLES;
    }
)


const articlesSlice = createSlice({
    name: 'articles',
    initialState: initialState,
    reducers: {
        clearArticles: (state) => {
            state.articles = [];
            state.loaded = false;
        }
    },
    extraReducers: {
        [loadArticles.pending]: (state) => {
            state.isLoading = true;
            state.hasError = false;
        },
        [loadArticles.fulfilled]: (state, action) => {
            action.payload.forEach(article => state.articles.push(article));
            state.loaded = true;
            state.isLoading = false;
            state.hasError = false;
        },
        [loadArticles.rejected]: (state) => {
            state.isLoading = false;
            state.hasError = true;
        }
    }
})


export const { clearArticles } = articlesSlice.actions;
export default articlesSlice.reducer;