import React from "react";
import avatar from '../../utility/images/avatar.png';
import upArrow from '../../utility/images/up-arrow.png';
import downArrow from '../../utility/images/down-arrow.png';
import { colorway } from "../../utility/colorway";

export const Comment = ({data}) => {

    const { normal, dark } = colorway;

    return (
        <div className="comments" style={normal.comments.comments}>
            <div className='comments-header'>
                <img src={avatar} alt="avatar" />
                <h2>{data.author}</h2>
            </div>
            <div className="up-votes">
                <img src={upArrow} alt='up arrow' />
                <p className="votes">{data.ups - data.downs}</p>
                <img src={downArrow} alt='down arrow' />
            </div>
            <p className="comments-body"> {data.body} </p>
        </div>
    )
}