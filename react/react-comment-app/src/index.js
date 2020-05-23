import React from 'react';
import ReactDOM from 'react-dom'; // index.js  入口文件
import CommentApp from './CommentApp'; // 模块机制

ReactDOM.render(
  <CommentApp />,
  // 真实DOM
  document.getElementById('root')
)

