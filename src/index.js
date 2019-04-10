import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Router from './router';
import {
    Provider
} from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// 浏览器端查看redux 需要安装谷歌插件
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './store'
let store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)))
ReactDOM.render(<Provider store={store}><Router /></Provider>, document.getElementById('root'));