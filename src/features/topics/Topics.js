import React from "react";
import { useState } from "react";



export const Topics = (props) => {

    const [topics, setTopics] = useState([])

    const toggleTopic = ({ target }) => {
        if(target.checked) {
            setTopics( prev => [...prev, target.value])
        } else if (!target.checked){
            let newTopics = topics.filter(topic => topic !== target.value);
            setTopics(newTopics)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
    }


    return(
        <form onSubmit={handleSubmit}>
            <h2>Choose your content</h2>
            <label for="news">News</label>
            <input onClick={toggleTopic} type="checkbox" id="news" value="news"/>
            <label for="tech">Tech</label>
            <input onClick={toggleTopic} type="checkbox" id="tech" value="tech"/>
            <label for="travel">Travel</label>
            <input onClick={toggleTopic} type="checkbox" id="travel" value="travel"/>
            <label for="fashion">Fashion</label>
            <input onClick={toggleTopic} type="checkbox" id="fashion" value="fashion"/>
            <label for="humor">Humor</label>
            <input onClick={toggleTopic} type="checkbox" id="humor" value="humor"/>
            <label for="gaming">Gaming</label>
            <input onClick={toggleTopic} type="checkbox" id="gaming" value="gaming"/>
            <label for="cars">Cars</label>
            <input onClick={toggleTopic} type="checkbox" id="cars" value="cars"/>
            <label for="animals">Animals</label>
            <input onClick={toggleTopic} type="checkbox" id="animals" value="animals"/>
            <label for="sports">Sports</label>
            <input onClick={toggleTopic} type="checkbox" id="sports" value="sports"/>
            <input type="submit" value="submit" />
        </form>
    )
}