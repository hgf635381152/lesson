import React, { Component } from 'react';
import { is } from 'immutable';
import ImmutableComponent from './common';


class Header extends ImmutableComponent {
  state = {  }
  // nextProps = {} == this.props = {}  对比两个对象是否相等
  shallowEqual(obja, objb) {
    if (typeof obja !== 'object' || typeof objb !== 'object'){
      return false;
    }
    const keysa = Object.keys(obja);
    const keysb = Object.keys(objb);
    if (keysa.length !== keysb.length){
      return false;
    }
    for (let key of keysa) {
      if (obja[key] !== objb[key]){
        return false;
      }
    }
    return true;
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   let isSame = this.shallowEqual(nextProps, this.props) && 
  //   this.shallowEqual(nextState, this.state);
  //   return !isSame;
  // }

  
  // shouldComponentUpdate(nextProps, nextState) {
  //   const thisProps = this.props || {};
  //   const thisState = this.state || {};
  //   nextProps = nextProps || {};
  //   nextState = nextState || {};
  //   if (Object.keys(thisProps).length !== Object.keys(nextProps).length
  //     || Object.keys(thisState).length !== Object.keys(nextState).length) {
  //     return true;
  //   }
  //   for (let propKey of nextProps) {
  //     if (!is(thisProps[propKey], nextProps[propKey])) {
  //       return true;
  //     }
  //   }
  //   for (let stateKey of nextState) {
  //     if (!is(thisState[stateKey], nextState[stateKey])) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }

  render() { 
    console.log('header render');
    const { title } = this.props;
    return (
      <div>
        header: {title}
      </div>
    )
  }
}
 
export default Header;