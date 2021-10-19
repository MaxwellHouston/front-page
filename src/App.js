import React from 'react';
import './App.css';
import { colorway } from './utility/colorway';
import logo from './utility/images/reddit-logo.png';
import { ArticleLayout } from './features/articleLayout/ArticleLayout';
import { Article } from './features/article/Article';
import { Settings } from './features/settings/Settings';
import { Topics } from './features/topics/Topics';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { isTopicsRendered, isSettingsRendered, isDarkMode, toggleSettings } from './features/settings/settingsSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const renderTopics = useSelector(isTopicsRendered);
  const renderSettings = useSelector(isSettingsRendered);
  const { normal, dark } = colorway;
  const darkMode = useSelector(isDarkMode);
  const colors = darkMode ? dark : normal;
  return (
    <div className='background' style={colors.app.content} >
      <header style={colors.header.header}>
        <img src={logo} alt='reddit-logo' />
        <h1 style={colors.header.headerH1}>Front Page <span>personal Reddit browser</span></h1>
        <button onClick={()=>{dispatch(toggleSettings())}} style={colors.header.headerButton}>Settings</button>
      </header>
      <div className="content">
        <Router>
        <Route path='/' exact component={ArticleLayout} />
        <Route path='/:id' component = {Article} />
        </Router>
        {renderSettings && <Settings />}
        {renderTopics && <Topics />}
      </div>
    </div>
  );
}

export default App;
