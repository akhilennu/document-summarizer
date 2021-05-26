import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import Summarizer from './Summarizer/Summarizer';
import { Typography } from '@material-ui/core';

const message = 'Rule Based Document Summarizer';
const App = () => (
  <div className="App">
    <Typography variant="h4" color="primary" align="center">
      {message}
    </Typography>
    <Summarizer />
  </div>
);

export default hot(module)(App);
