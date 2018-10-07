// var React = require('react');
// var ReactDOM = require('react-dom');
// var App = require('./components/App');

import React from 'react';
import ReactDOM from 'react-dom';
// import SearchBar from './components/Search_bar';
import App from './components/App';

// import('./index.css');

// const API_KEY = '.....';

// const App = () => {
//   return (
//     <div>
//       Hi
//       {/* <SearchBar /> */}
//     </div>
//   )
// }


ReactDOM.render(
  <App />,
  document.querySelector('.container')
);