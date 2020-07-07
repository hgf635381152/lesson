import React, { Component } from 'react';

class Test extends Component {
  componentDidMount() {
    console.log(this.p.offsetHeight);
  }
  constructor() {
    super();
    this.state = {

    }
  }
  render() { 
    const { content } = this.props;
    return ( 
      <p ref={(p) => {this.p = p}}>
        {content}
      </p>
    );
  }
  
}
 
export default Test;