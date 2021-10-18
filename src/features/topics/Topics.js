import React from "react";
import { useState } from "react";
import { submitTopics, selectTopics } from "../topics/topicsSlice";
import { useDispatch, useSelector } from 'react-redux';
import { clearArticles } from "../articleLayout/articlesSlice";
import { toggleTopics } from "../settings/settingsSlice";
import { colorway } from "../../utility/colorway";



export const Topics = () => {
    const dispatch = useDispatch();
    const stateTopics = useSelector(selectTopics);
    const [topics, setTopics] = useState([]);
    const { normal, dark } = colorway;
   
    const toggleTopic = ({ target }) => {
        if(target.checked) {
            setTopics( prev => [...prev, target.value])
        } else if (!target.checked){
            let newTopics = topics.filter(topic => topic !== target.value);
            setTopics(newTopics)
        }
    }

    const isChecked = ({target}) => {
        if(stateTopics.includes(target.value)){
            target.checked = true;
        }
        console.log(target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(clearArticles())
        dispatch(submitTopics(topics))
        dispatch(toggleTopics())
    }


    return(
        <div className='topics' style={normal.topics.topic}>
            <h2>Choose your topics</h2>
            <form onSubmit={handleSubmit}>
                <div className='input-group'>
                <label for="news">News</label>
                <input onLoad={isChecked} onClick={toggleTopic} type="checkbox" id="news" value="news"/>
                </div>
                <div className='input-group'>
                <label for="tech">Tech</label>
                <input onClick={toggleTopic} type="checkbox" id="tech" value="tech"/>
                </div>
                <div className='input-group'>
                <label for="travel">Travel</label>
                <input onClick={toggleTopic} type="checkbox" id="travel" value="travel"/>
                </div>
                <div className='input-group'>
                <label for="fashion">Fashion</label>
                <input onClick={toggleTopic} type="checkbox" id="fashion" value="fashion"/>
                </div>
                <div className='input-group'>
                <label for="humor">Humor</label>
                <input onClick={toggleTopic} type="checkbox" id="humor" value="humor"/>
                </div>
                <div className='input-group'>
                <label for="gaming">Gaming</label>
                <input onClick={toggleTopic} type="checkbox" id="gaming" value="gaming"/>
                </div>
                <div className='input-group'>
                <label for="cars">Cars</label>
                <input onClick={toggleTopic} type="checkbox" id="cars" value="cars"/>
                </div>
                <div className='input-group'>
                <label for="animals">Animals</label>
                <input onClick={toggleTopic} type="checkbox" id="animals" value="animals"/>
                </div>
                <div className='input-group'>
                <label for="sports">Sports</label>
                <input onClick={toggleTopic} type="checkbox" id="sports" value="sports"/>
                </div>
                <input id='submit' type="submit" value="Submit" />
            </form>
        </div>
    )
}