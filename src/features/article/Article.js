import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { renderAwards, dateConverter } from "../../utility/functions";
import noImage from '../../utility/images/no-image.png';
import upArrow from '../../utility/images/up-arrow.png';
import downArrow from '../../utility/images/down-arrow.png';
import { Link } from "react-router-dom";
import { Comment } from '../comments/Comment';




export const Article = ({match}) => {
    const [comments, setComments] = useState([]);
    const [fullArticle, setFullArticle] = useState({})
    const getArticleById = useSelector(state => state.articles.articles.filter(article => article.data.id === match.params.id));
    const article = getArticleById[0].data;

    const fetchFullArticle = async () => {
        let url = `https://www.reddit.com${article.permalink}.json`;
        let response = await fetch(url);
        let json = await response.json();
        let commentArray = json[1].data.children.map(comment => comment.data)
        setComments(commentArray);
        setFullArticle(json[0].data.children[0].data);
        console.log(json)
    };

    const fullMediaSelector = () => {
        if(fullArticle.is_video){
            return (
                <div className='article-content-single'>
                    <video src={fullArticle.media.reddit_video.fallback_url} controls>Video not supported</video>
                </div>
                )
        } else if(fullArticle.thumbnail === 'default' || fullArticle.thumbnail === ''){
            return (
                <div className='article-content'>
                    <img src={noImage} alt='not avilable' />
                    <a href={fullArticle.url}><p>Link to article</p></a>
                </div>
                )
        } else if(fullArticle.post_hint === 'link'){
            return (
                <div className='article-content'>
                    <img src={fullArticle.thumbnail} alt='not avilable' />
                    <a href={fullArticle.url}><p>Link to article</p></a>
                </div>
                )
        } else if(fullArticle.is_gallery){
            return (
                <div className='article-content'>
                    <img src={fullArticle.thumbnail} alt='not avilable' />
                    <a href={fullArticle.url}><p>Link to gallery</p></a>
                </div>
                )
        }
         else {
            return (
            <div className='article-content-single'>
                <img src={fullArticle.url} alt='' />
            </div>
            )
        }
    }

    useEffect( () => {
        fetchFullArticle();
    },[]);

    return (
        <article>
        <div className='article-header'>
            <Link to='/' className='back-button'><button>Back to Front Page</button></Link>
            <h2>{article.title}</h2>
        </div>
        <div className='award-container'>
                {renderAwards(article)}
        </div>
        {fullMediaSelector()}
        <div className='article-footer'>
        <div className="up-votes">
            <img src={upArrow} alt='up arrow' />
            <p className="votes">{article.ups - article.downs}</p>
            <img src={downArrow} alt='down arrow' />
        </div>
        <p className="poster">{fullArticle.author}</p>
        <p className="date">{dateConverter(fullArticle)}</p>
        </div>
        
        <div className="comments-container">
            {comments.map(comment => <Comment key={comment.id} data={comment} />)}
        </div>
        
        </article>
        
    )
}