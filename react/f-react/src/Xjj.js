import React, { Component, Fragment } from 'react';
import XjjItem from './XjjItem';
import './style.css';

class Xjj extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list: ['基础按摩','精油推背']
    }
  }
  render(){
    return(
      <Fragment>
        {/* 这是一个注释 */}
        <div>
          <label htmlFor="in">增加服务：</label>
          <input 
            id="in" 
            className="input" 
            value={this.state.inputValue} 
            onChange={this.inputChange.bind(this)}
            ref={(input)=>{this.input=input}}
          />
          <button onClick={this.addList.bind(this)}>增加服务</button>
        </div>
        <ul ref={(ul)=>{this.ul=ul}}>
          {
            this.state.list.map((item, index) => {
              return (
                  <XjjItem 
                    key={index+item}
                    content={item}
                    index={index}
                    deleteItem={this.deleteItem.bind(this)}
                  />        
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
  inputChange(){
    this.setState({
      inputValue: this.input.value
    })
  }
  // 增加列表
  addList(){
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    },() => {
        console.log(this.ul.querySelectorAll('li').length)
    })
    // console.log(this.ul.querySelectorAll('li').length)
    // 异步  所以要回调
  }
  // 删除列表
  deleteItem(index){
    // console.log(index);
    // 错误写法  能成功但是会影响性能
    // this.state.list.splice(index,1)
    // this.setState({
    //   list: this.state.list
    // })
    let list = this.state.list
    list.splice(index,1)
    this.setState({
      list: list
    })
  }
}


export default Xjj;