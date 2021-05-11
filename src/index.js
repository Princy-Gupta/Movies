import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import root from './reducers/index'
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';

const logger=function({dispatch,getState})
{
  return function(next)
  {
    return function(action)
    {
      // middleware code
      console.log('action type:', action.type);
      next(action);
    }
  }
}
const store= createStore(root,applyMiddleware(logger));
console.log(store);

// store.dispatch({
//   type:'ADD_MOVIES'
// })     // used to send actions

ReactDOM.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>,
  document.getElementById('root')
);


