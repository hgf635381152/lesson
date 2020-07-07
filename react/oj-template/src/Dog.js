import React, { Component } from 'react';

class Dog extends Component {
  constructor(){
    super();
    this.state = {
      isrun: false,
      isjiao: false
    } 
  }
  render() { 
    return (  
      <div onClick={this.Jiao.bind(this)}>小狗</div>
    );
  }
  Pao() {
    console.log('跑了'); 
    setTimeout(() => {
      this.setState({
        isrun: false,
        isjiao: false
      },() => {
        console.log('不跑也不叫了')
      })
    },2000)
  }
  Jiao() {
    console.log('汪汪');
    this.Pao()
  }
}


export default Dog;