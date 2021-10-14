import React from "react";
import noImage from '../../utility/images/no-image.png';
import twitter from '../../utility/images/twitter-logo.png';
import { Link } from "react-router-dom";

export const ArticlePreview = ({article}) => {

    const mediaSelector = () => {
        if(article.thumbnail === 'self'){
            if(article.selftext.includes('twitter.com')){
               return <img className='thumbnail' src={twitter} alt='twitter logo' />    
            }
            return <p className='thumbnail'>{article.selftext}</p>
        } else if(article.thumbnail === 'default' || article.thumbnail === ''){
            return <img className='thumbnail' src={noImage} alt='' />
        } else {
            return <img className='thumbnail' src={article.thumbnail} alt='' />
        }
    };

    const dateConverter = () => {
        let date = new Date(article.created*1000)
        return date.toLocaleDateString();
    };

    const renderAwards = () => {
        let awards = article.all_awardings;
        if( awards.length === 0) {return};
            return awards.map( award => (
            <div className="award">
            <img src={award.icon_url} alt={award.name} />
            <p>{award.count}</p>
        </div>))
    }


    return (
        <div className="article-preview">
            <h2 className={article.title.length > 100 && 'large-title'}>{article.title}</h2>
            <div className='award-container'>
                {renderAwards()}
            </div>
            <p className="upVotes">{article.ups - article.downs}</p>
            {mediaSelector()}
            <p className='filler'></p>
            <hr/>
            <div className="footer info">
                <p>{article.author}</p>
                <p>{dateConverter()}</p>
                <Link to={`/${article.id}`}><p>Full Article</p></Link>
            </div>
            
            

        </div>
    )
}