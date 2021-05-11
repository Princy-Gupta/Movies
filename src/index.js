import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import movies from './reducers/index'
import App from './components/App';
import { createStore } from 'redux';


const store= createStore(movies);
console.log(store);

store.dispatch({
  type:'ADD_MOVIES'
})     // used to send actions

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


