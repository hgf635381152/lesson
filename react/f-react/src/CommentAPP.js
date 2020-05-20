import React from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './index.css'

function CommentAPP(){
  return(
    <div className="wrapper">
      <CommentInput />
      <CommentList />
    </div>
  )
}

export default CommentAPP;