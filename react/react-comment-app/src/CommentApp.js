import React,{Component} from 'react'; // 按需加载  es6  解构
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css'; // 像 js 一样引入
// let {a} = {a:1, b=2, c=3};

class CommentApp extends Component {
  render() { // 接口
    return(
      <div className="wrapper">
        <CommentInput onSubmit={this.handSubmitComment.bind(this)} />
        <CommentList />
      </div>
    )
  }
  handSubmitComment(comment){
    console.log(comment);
  }
}

export default CommentApp;