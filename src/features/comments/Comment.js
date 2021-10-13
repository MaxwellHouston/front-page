import React from "react";
import avatar from '../../utility/images/avatar.png';


export const Comment = ({data}) => {


    return (
        <div className="comments">
            <img src={avatar} alt="avatar" />
            <h2>{data.author}</h2>
            <p> {data.body} </p>
            <p className="upVotes">{data.ups - data.downs}</p>
        </div>
    )
}