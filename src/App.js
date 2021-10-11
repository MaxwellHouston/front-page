import React from 'react';
import './App.css';
import { ArticleLayout } from './features/articleLayout/ArticleLayout';
import { Settings } from './features/settings/Settings';
import { Topics } from './features/topics/Topics';

function App() {
  return (
    <div>
      <ArticleLayout />
      <Settings />
      <Topics />
    </div>
  );
}

export default App;
