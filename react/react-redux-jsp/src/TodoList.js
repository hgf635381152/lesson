import React, { Component } from 'react';
import TodoListUI from './TodoListUI';
import store from './store/index';
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import axios from 'axios';


class TodoList extends Component {
  constructor(props) {
    super(props);
    // console.log(store.getState())
    this.state = store.getState()
    this.changeinputValue = this.changeinputValue.bind(this)
    this.storeChange = this.storeChange.bind(this)
    this.clickbtn = this.clickbtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return ( 
      <TodoListUI
        inputValue={this.state.inputValue}
        changeinputValue={this.changeinputValue}
        clickbtn={this.clickbtn}
        list={this.state.list}
        deleteItem={this.deleteItem}
      />
     )
  }

  componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5ef561eb7548f861048c7f16/reactdemo1')
    .then((res) => {
      const data = res.data;
      const action = getListAction(data)
      store.dispatch(action)
    })
  }

  changeinputValue(e){
    const action = changeInputAction(e.target.value)
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
  clickbtn(){
    const action = addItemAction()
    store.dispatch(action)
  }
  deleteItem(index){
    const action = deleteItemAction(index)
    store.dispatch(action)
  }
}
 
export default TodoList;