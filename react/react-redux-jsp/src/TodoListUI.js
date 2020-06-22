import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { Input, Button, List } from 'antd';

class TodoListUI extends Component {
  render() { 
    return (  
      <div style={{ margin: '20px' }}>
        <div>
          <Input
            placeholder={this.props.inputValue}
            style={{ width: '250px', marginRight: '20px' }}
            onChange={this.props.changeinputValue}
            value={this.props.inputValue}
          />
          <Button
            type="primary"
            onClick={this.props.clickbtn}
          >增加</Button>
        </div>
        <div style={{ margin: '10px', width: '300px' }}>
          <List
            bordered
            dataSource={this.props.list}
            renderItem={(item, index) => (<List.Item onClick={(index) => {this.props.deleteItem(index)}}>{item}</List.Item>)}
          />
        </div>
      </div>
    )
  }
}
 
export default TodoListUI;