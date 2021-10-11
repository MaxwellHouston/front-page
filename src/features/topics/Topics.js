import React from "react";



export const Topics = (props) => {


    return(
        <form>
            <h2>Choose your content</h2>
            <label for="news">News</label>
            <input type="checkbox" id="news" value="news"/>
            <label for="tech">Tech</label>
            <input type="checkbox" id="tech" value="tech"/>
            <label for="travel">Travel</label>
            <input type="checkbox" id="travel" value="travel"/>
            <label for="fashion">Fashion</label>
            <input type="checkbox" id="fashion" value="fashion"/>
            <label for="humor">Humor</label>
            <input type="checkbox" id="humor" value="humor"/>
            <label for="gaming">Gaming</label>
            <input type="checkbox" id="gaming" value="gaming"/>
            <label for="cars">Cars</label>
            <input type="checkbox" id="cars" value="cars"/>
            <label for="animals">Animals</label>
            <input type="checkbox" id="animals" value="animals"/>
            <label for="sports">Sports</label>
            <input type="checkbox" id="sports" value="sports"/>
        </form>
    )
}