import React from "react";
import noImage from '../../utility/images/no-image.png';
import { Link } from "react-router-dom";

export const ArticlePreview = ({article}) => {

    const mediaSelector = () => {
        if(article.thumbnail === 'self'){
            return <p>{article.selftext}</p>
        } else if(article.thumbnail === 'default' || article.thumbnail === ''){
            return <img src={noImage} alt='' />
        } else {
            return <img src={article.thumbnail} alt='' />
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
            <h2>{article.title}</h2>
            <div className='award-container'>
                {renderAwards()}
            </div>
            <p className="upVotes">{article.ups - article.downs}</p>
            {mediaSelector()}
            <hr/>
            <div className="footer info">
                <p>{article.author}</p>
                <p>{dateConverter()}</p>
                <Link to={`/${article.id}`}><p>Full Article</p></Link>
            </div>
            
            

        </div>
    )
}