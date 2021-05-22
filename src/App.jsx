import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import Summarizer from './Summarizer/Summarizer';

const message = 'Welcome to Document Summarizer';
const App = () => (
  <div className="App">
    <Summarizer />
  </div>
);

export default hot(module)(App);
