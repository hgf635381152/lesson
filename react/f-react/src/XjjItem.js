import React, { Component } from 'react';
import PropTypes from 'prop-types';

class XjjItem extends Component {
  constructor(){
    super();
    this.handleClick = this.handleClick.bind(this)
  }
  // 组件第一次存在于dom中， 函数是不会被执行的
  // 如果已经存在于dom中， 函数才会执行
  // componentWillReceiveProps() {
  //   console.log('child-componentWillReceiveProps-------')
  // }
  // // 子组件将要被删除时执行
  // componentWillUnmount() {
  //   console.log('child-componentWillUnmount--------')
  // }

  shouldComponentUpdate(nextProps, nextState) {
    if(nextProps.content !== this.props.content){
      return true;
    }
    else{
      return false;
    }
  }

  render() { 
    console.log('child-render-----')
    return ( 
      <li onClick={this.handleClick}>
        {this.props.aname}为你导航-{this.props.content}
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