import React from 'react';
import ReactDOM from 'react-dom';
// 数据管理模式
// 创建store  中央仓库   数据管理的架构
// createStore  comments  放到中央仓库
// 财务
import { createStore } from 'redux'; // 全家桶  三巨头  数据管理
import { Provider } from 'react-redux';
// 数据就当道仓库， 跟组件没有依赖关系
// 数据开发更加独立  UI组件更加纯粹
import CommentApp from './containers/CommentApp';
import CommentsReducer from './reducers/comments';
//  仓库  状态数
const store = createStore(CommentsReducer);

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
)
// commentApp   comments  父组件  , props

// react-router  react-redux