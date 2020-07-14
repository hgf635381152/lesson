import React, { Component } from 'react';
import './Bottom.css';
import XingQiu from './1.png'
import DongTai from './2.png'
import FaXian from './3.png'
import Wo from './4.png'

class Bottom extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }
  render() {
    return (
      <div className="bottom">
        <div className="first">
          <div className="images"><img src={XingQiu} alt="" width="30px" height="30px" /></div>
          星球
        </div>
        <div className="second">
          <div className="images"><img src={DongTai} alt="" width="30px" height="30px" /></div>
          动态
        </div>
        <div className="third">
          <div className="images"><img src={FaXian} alt="" width="30px" height="30px" /></div>
          发现
        </div>
        <div className="four">
          <div className="images"><img src={Wo} alt="" width="30px" height="30px" /></div>
          我
        </div>
      </div>      
    );
  }
}

export default Bottom;