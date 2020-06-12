import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XjjItem extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  render() { 
    return ( 
      <li onClick={this.handleClick}>
        {this.props.aname}为你服务-{this.props.content}
      </li>
     );
  }

  handleClick(){
    this.props.deleteItem(this.props.index);
  }
}

XjjItem.propTypes = {
  aname: PropTypes.string.isRequired,
  content: PropTypes.string,
  index: PropTypes.number,
  deleteItem: PropTypes.func
}
XjjItem.defaultProps={
  aname: '酷'
}

export default XjjItem;