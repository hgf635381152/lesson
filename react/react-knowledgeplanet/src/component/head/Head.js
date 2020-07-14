import React, { Component } from 'react'
import './Head.css';
import Add from './加号.png'

class Head extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="head">
        <div className="head-text">知识星球</div>  
        <div className="head-image"><img src={Add} alt="" width="24px" height="24px"></img></div>     
      </div>
    );
  }
}

export default Head;