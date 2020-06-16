import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';
import store from './store/index';


class TodoList extends Component {
  constructor(props){
    super(props);
    this.changeinputValue = this.changeinputValue.bind(this)
    // console.log(store.getState())
    this.state = store.getState()
    this.storeChange = this.storeChange.bind(this)
    store.subscribe(this.storeChange)
  }
  render() { 
    return ( 
      <div style={{margin:'20px'}}>
        <div>
          <Input 
            placeholder={this.state.inputValue} 
            style={{ width:'250px', marginRight:'20px'}}
            onChange={this.changeinputValue}
          />
          <Button type="primary">增加</Button>
        </div>
        <div style={{margin:'10px', width:'300px'}}>
          <List 
            bordered
            dataSource={this.state.list}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </div>
      </div>
     );
  }
  changeinputValue(e){
    const action = {
      type: 'changeInput',
      value: e.target.value
    }
    store.dispatch(action)
  }
  storeChange(){
    this.setState(store.getState())
  }
}
 
export default TodoList;