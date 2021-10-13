import React from "react";
import { useDispatch } from "react-redux";
import { toggleTopics } from "./settingsSlice";


export const Settings = () => {
    const dispatch = useDispatch();

    return (
        <nav>
            <ul>
                <li onClick={()=>{dispatch(toggleTopics())}}>Add/Remove Topics</li>
                <li className="coming-soon">Filters</li>
                <li className="coming-soon">Change Account</li>
                <li>Normal Mode</li>
                <li>Night Mode</li>
            </ul>
        </nav>
    )
}