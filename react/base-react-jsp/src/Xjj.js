import React, { Component, Fragment } from 'react';
import XjjItem from './XjjItem';
import Boss from './Boss';
import axios from 'axios';
import './style.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

class Xjj extends Component{
  // 在某一时刻   可以自动执行的函数
  // constructor 是 es6 的语法  构造函数
  constructor(props){
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
  }

  // componentWillMount() {
  //   console.log('componentWillMount------组件将要挂载到页面的时候')
  // }
  // componentDidMount() {
  //   console.log('componentDidMount------组件挂载完成的时候')
  // }
  // shouldComponentUpdate(){
  //   console.log('1-shouldComponentUpdate------')
  //   return true
  //   // return false的话  截至到这就不会往下执行了
  // }
  // componentWillUpdate(){
  //   console.log('2-componentWillUpdate-------')
  // }
  // componentDidUpdate() {
  //   console.log('4-componentDidUpdate---------')
  // }

  componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5ee489a65f62a4772f77fe95/f-react/Xjj')
      .then((res) => {
        console.log('axios 获取数据成功'+JSON.stringify(res))
        this.setState({
          list: res.data.data
        })
      })
      .catch((error) => {
        console.log('axios 获取数据失败'+error)
      })
  }

  render(){
    // console.log('render------挂载中')
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
          <TransitionGroup>
            {
              this.state.list.map((item, index) => {
                return (
                  <CSSTransition
                    timeout={2000}
                    classNames="boss-text"
                    unmountOnExit
                    appear={true}
                    key={index+item}
                  >
                    <XjjItem 
                      // key={index+item}
                      content={item}
                      index={index}
                      deleteItem={this.deleteItem.bind(this)}
                    />  
                  </CSSTransition>      
                )
              })
            }
          </TransitionGroup>
        </ul>
        <Boss />
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