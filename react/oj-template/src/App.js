import React, { Component } from 'react';
import './App.css';
import axios from 'axios';  // 数据与组件是分离的
import './mock/data';   

// import Dog from './Dog';
// import Test from './Test';
// import Notification from './Notification';

// 函数的返回值是组件
// /posts/   axios api url   /comments/
// Post 组件作为参数
// 通用性的提供数据请求及更新的解决方案
// 为这个组件服务
class Post extends Component {
  render() {
    return (
      <div>
        <p>{this.props.msg}</p>
        <p>{this.props.content}</p>
      </div>
    )
  }
}
class Comment extends Component {
  render() {
    return (
      <div>
        Comment
      </div>
    )
  }
}
const loadAndRefreash = (url) => (WrappedComponent) => {
  // 返回组件
  return class extends Component {
    constructor() {
      super()
      this.state = {
        msg: '',
        content: 'null'
      }
    }
    componentDidMount() {
      // 管理数据请求
      this._loadData();
    }
    async _loadData() {
      this.setState({
        msg: '数据加载中...'
      })
      axios.get(url)
        .then((res) => {
          this.setState({
            msg: res.data.title,
            content: res.data.content
          })
        })
    }
    render() {
      const props = {
        msg: this.state.msg,
        content: this.state.content
      }
      return (
        <WrappedComponent {...props}/>
      )
    }
  }
}

const WrappedPost = loadAndRefreash('/posts/')(Post);
// const WrappedComment = loadAndRefreash('/coments/')(Comment);

function App() {
  // const props = {
  //   number: 50
  // }
  return (
    <div className="App">
      <WrappedPost />
      {/* <WrappedComment /> */}
      {/* message */}
      {/* <Post /> */}
      {/* <Dog /> */}
      {/* <Test /> */}
      {/* <Notification props /> */}
    </div>
  );
}
export default App;
