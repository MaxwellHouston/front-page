import React from 'react';
import './App.css';
import logo from './utility/images/reddit-logo.png';
import { ArticleLayout } from './features/articleLayout/ArticleLayout';
import { Article } from './features/article/Article';
import { Settings } from './features/settings/Settings';
import { Topics } from './features/topics/Topics';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { isTopicsRendered, isSettingsRendered, toggleSettings } from './features/settings/settingsSlice';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const renderTopics = useSelector(isTopicsRendered);
  const renderSettings = useSelector(isSettingsRendered);
  
  return (
    <div className="content">
      <header>
        <img src={logo} alt='reddit-logo' />
        <h1>Front Page</h1>
        <button onClick={()=>{dispatch(toggleSettings())}}></button>
      </header>
      <Router>
      <Route path='/' exact component={ArticleLayout} />
      <Route path='/:id' component = {Article} />
      </Router>
      {renderSettings && <Settings />}
      {renderTopics && <Topics />}
    </div>
  );
}

export default App;
