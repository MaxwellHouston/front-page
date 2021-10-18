import React from "react";
import loading from '../../utility/images/loading.gif';

export const LoadingArticle = () => {
    return (
        <div className="article-preview" style={{backgroundColor: 'white'}}>
            <h2 style={{color: 'grey', backgroundColor: 'grey', borderRadius: '5px'}}>Loading</h2>
            <div className='award-container'>   
            </div>
            <p className='filler'></p>
            <img className='thumbnail' src={loading} alt='loading' />
            <p className='filler'></p>
            <hr/>
            <div className="footer info">
                <p  style={{color: 'grey', backgroundColor: 'grey', borderRadius: '5px'}}>Loading Full Article</p>
                <p  style={{color: 'grey', backgroundColor: 'grey', borderRadius: '5px'}}>Loading Full Article</p>
                <p  style={{color: 'grey', backgroundColor: 'grey', borderRadius: '5px'}}>Full Article</p>
            </div>
        </div>
    )
}