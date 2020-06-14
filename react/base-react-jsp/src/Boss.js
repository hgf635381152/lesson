import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

class Boss extends Component {
  constructor(props){
    super(props);
    this.state = {
      isShow: true
    }
    this.toTogole = this.toTogole.bind(this)
  }
  render() { 
    return (  
      <div>
        <CSSTransition 
          in={this.state.isShow}
          timeout={2000}
          classNames="boss-text"
          unmountOnExit
        >
          <div>Boss级人物-孙悟空</div>
        </CSSTransition>
        <div>
          <button onClick={this.toTogole}>召唤Boss</button>
        </div>
      </div>
    );
  }

  toTogole() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
}
 
export default Boss;