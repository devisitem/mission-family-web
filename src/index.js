import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/main.css'

import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './_reducers/index'
import { Provider } from 'react-redux'

import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';


//const store = createStore(rootReducer, composeWithDevTools())

// ReactDOM.render(
//   <Provider store={ store }>
//스토어는 객체만 받지만 promiseMiddleware 와 Reduxthunk를 넣기위해 createStore를 해줌
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(Reducer,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
             window.__REDUX_DEVTOOLS_EXTENSION__()
          )}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
