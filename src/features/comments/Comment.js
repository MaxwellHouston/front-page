import React from "react";




export const Comments = (props) => {


    return (
        <div className="comments">
            <img src="#" alt="avatar" />
            <h2>Commenter User Name</h2>
            <p> comment </p>
            <div className="likes">
                <img src="#" alt="up arrow" />
                <p>number of likes</p>
                <img src= "#" alt ="down arrow" />
            </div>
        </div>
    )
}