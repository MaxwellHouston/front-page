import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { renderAwards, dateConverter } from "../../utility/functions";
import noImage from '../../utility/images/no-image.png';
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
            return <video src={fullArticle.media.reddit_video.fallback_url} controls>Video not supported</video>
        } else if(fullArticle.thumbnail === 'default' || fullArticle.thumbnail === ''){
            return (<div>
                <img src={noImage} alt='not avilable' />
                <a href={fullArticle.url}><p>Link to article</p></a>
            </div>)
        } else if(fullArticle.post_hint === 'link'){
            return (<div>
                <img src={fullArticle.thumbnail} alt='not avilable' />
                <a href={fullArticle.url}><p>Link to article</p></a>
            </div>)
        } else if(fullArticle.is_gallery){
          return (<div>
                    <img src={fullArticle.thumbnail} alt='not avilable' />
                    <a href={fullArticle.url}><p>Link to gallery</p></a>
                 </div>)
        }
         else {
            return <img src={fullArticle.url} alt='' />
        }
    }

    useEffect( () => {
        fetchFullArticle();
    },[]);

    return (
        <article>
        <h1 className="article-title">{article.title}</h1>
        <Link to='/'><button>Return</button></Link>
        <div className='award-container'>
                {renderAwards(article)}
            </div>
        <p className="upVotes">{article.ups - article.downs}</p>
        {fullMediaSelector()}
        <p className="poster">{fullArticle.author}</p>
        <p className="date">{dateConverter(fullArticle)}</p>
        <div className="comments-container">
            {comments.map(comment => <Comment key={comment.id} data={comment} />)}
        </div>
        
        </article>
        
    )
}