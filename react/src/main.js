import 'babel-polyfill';
import App from './containers/App';
import React from 'react';
import ReactDOM from 'react-dom';

$(function() {
  ReactDOM.render(
    <App />,
    document.getElementById('app')
  );
});
