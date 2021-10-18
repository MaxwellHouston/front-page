import React from "react";
import { useDispatch } from "react-redux";
import { toggleTopics } from "./settingsSlice";
import { colorway } from "../../utility/colorway";


export const Settings = () => {
    const dispatch = useDispatch();
    const { normal, dark } = colorway;

    return (
        <nav style={normal.settings.nav}>
            <ul>
                <li className='button' onClick={()=>{dispatch(toggleTopics())}}>Add/Remove Topics</li>
                <li className="coming-soon">Filters</li>
                <li className="coming-soon">Change Account</li>
                <li>Normal Mode</li>
                <li>Night Mode</li>
            </ul>
        </nav>
    )
}