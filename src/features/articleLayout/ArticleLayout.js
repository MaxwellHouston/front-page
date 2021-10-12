import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTopics } from "../topics/topicsSlice";
import { loadArticles, selectArticles } from "./articlesSlice";
import { subredditList } from "../../utility/subreddits";
import { ArticlePreview } from "../article/ArticlePreview";


export const ArticleLayout = () => {
    const dispatch = useDispatch();
    const topics = useSelector(selectTopics);
    const [subreddits, setSubreddits] = useState([]);
    const articles = useSelector(selectArticles);

    useEffect(()=>{
        let subs = [];
        for(const topic of topics){
            subredditList[topic].forEach(sub => subs.push(sub))
        }
        setSubreddits(subs);
    },[topics]);

    useEffect(()=>{
        if(subreddits.length === 0){return}
        dispatch(loadArticles(subreddits))
    },[subreddits, dispatch])



    return (
        <div className="preview-container">
            {articles.map(article => <ArticlePreview key={article.data.id} article={article.data} />)}
        </div>
    )
}