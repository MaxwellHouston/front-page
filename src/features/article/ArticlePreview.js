import React from "react";
import noImage from '../../utility/images/no-image.png';
import twitter from '../../utility/images/twitter-logo.png';
import { Link } from "react-router-dom";
import { renderAwards, dateConverter } from "../../utility/functions";
import { colorway } from "../../utility/colorway";
import { isDarkMode } from "../settings/settingsSlice";
import { useSelector } from "react-redux";

export const ArticlePreview = ({article}) => {

    const { normal, dark } = colorway;
    const darkMode = useSelector(isDarkMode);
    const colors = darkMode ? dark : normal;

    const mediaSelector = () => {
        if(article.thumbnail === 'self'){
            if(article.selftext.includes('twitter.com')){
               return <img className='thumbnail' src={twitter} alt='twitter logo' />    
            }
            return <p className='thumbnail-text' style={colors.articlePreview.thumbnailText}>{article.selftext}</p>
        } else if(article.thumbnail === 'default' || article.thumbnail === ''){
            return <img className='thumbnail' src={noImage} alt='' />
        } else {
            return <img className='thumbnail' src={article.thumbnail} alt='' />
        }
    };

    return (
        <div className="article-preview" style={colors.articlePreview.articlePreview}>
            <h2 className={article.title.length > 100 && 'large-title'}>{article.title}</h2>
            <div className='award-container'>
                {renderAwards(article)}
            </div>
            <p className="upVotes" style={colors.articlePreview.upVotes}>{article.ups - article.downs}</p>
            {mediaSelector()}
            <p className='filler'></p>
            <hr/>
            <div className="footer info">
                <p>{article.author}</p>
                <p>{dateConverter(article)}</p>
                <Link to={`/${article.id}`} style={colors.articlePreview.articleLink}><p >Full Article</p></Link>
            </div>
        </div>
    )
}