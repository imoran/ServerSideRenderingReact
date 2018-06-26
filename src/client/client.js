// Startup point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';


// Set up event handlers to already existing structure from server
ReactDOM.hydrate(<Home />, document.querySelector('#root'));
