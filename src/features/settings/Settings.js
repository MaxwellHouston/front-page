import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTopics, toggleDarkMode, isDarkMode } from "./settingsSlice";
import { colorway } from "../../utility/colorway";


export const Settings = () => {
    const dispatch = useDispatch();
    const { normal, dark } = colorway;
    const darkMode = useSelector(isDarkMode);
    const colors = darkMode ? dark : normal;

    return (
        <nav style={colors.settings.nav}>
            <ul>
                <li className='button' onClick={()=>{dispatch(toggleTopics())}}>Add/Remove Topics</li>
                <li onClick={()=>{dispatch(toggleDarkMode())}}>Toggle Dark Mode</li>
                <li className="coming-soon">Filters</li>
                <li className="coming-soon">Change Account</li>
            </ul>
        </nav>
    )
}