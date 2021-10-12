import React from 'react';
import './App.css';
import logo from './utility/images/reddit-logo.png';
import { ArticleLayout } from './features/articleLayout/ArticleLayout';
import { Settings } from './features/settings/Settings';
import { Topics } from './features/topics/Topics';

function App() {
  return (
    <div className="content">
      <header>
        <img src={logo} alt='reddit-logo' />
        <h1>Front Page</h1>
        <button></button>
      </header>
      <ArticleLayout />
      <Settings />
      <Topics />
    </div>
  );
}

export default App;
