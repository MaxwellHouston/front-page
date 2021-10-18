import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTopics } from "../topics/topicsSlice";
import { articlesLoaded, loadArticles, selectArticles, isLoading } from "./articlesSlice";
import { subredditList } from "../../utility/subreddits";
import { ArticlePreview } from "../article/ArticlePreview";
import { colorway } from "../../utility/colorway";
import { LoadingArticle } from "./LoadingArticle";
import { shuffleArray } from "../../utility/functions";


export const ArticleLayout = () => {
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);
    const isLoaded = useSelector(articlesLoaded);
    const [subreddits, setSubreddits] = useState([]);
    const articles = useSelector(selectArticles);
    const { normal, dark } = colorway;
    const articlesLoading = useSelector(isLoading);
  
    useEffect(()=>{
        let subs = [];
        for(const topic of topics){
            subredditList[topic].forEach(sub => subs.push(sub))
        }
        setSubreddits(subs);
    },[topics]);

    useEffect(()=>{
        if(subreddits.length === 0){return}
        if(isLoaded){return}
        dispatch(loadArticles(subreddits))
    },[dispatch, subreddits, isLoaded])

    const loadingRender = () => {
        if(articlesLoading){
            let loadingArticles = [];
            for(let i = 0; i < 9; i++){
                loadingArticles.push(<LoadingArticle key={i} />)
            }
            return loadingArticles;
        } else {
            let loadedArticles = articles.map(article => <ArticlePreview key={article.data.id} article={article.data} />);
            return loadedArticles;
        }
    }


    return (
        <div className="preview-container" style={normal.articlePreview.previewContainer}>
            {loadingRender()}
        </div>
    )
}