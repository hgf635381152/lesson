import React, { Component } from 'react';

class Notification extends Component {
  constructor() {
    super();
  }
  render() { 
    const { number } = this.props;
    return ( 
      <div>{ ({ number } > 0) ? (({ number } > 99) ? '99+' : { number }) : '无未读消息'}</div>
    );
  }
}
 
export default Notification;