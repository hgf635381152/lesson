import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputvalue: ''
    };
  }
  handleChangeValue() {

  }
  render() {
    return (
      <div>
        <input width="375px" type="text" placeholder="搜索用户、星球或内容" value={this.state.inputvalue} onChange={this.handleChangeValue.bind(this)}/>
      </div>
    );
  }
}

export default Search;