import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      inputvalue: ''
    };
  }
  handleChangeValue(event) {
    this.setState({
      inputvalue: event.target.value
    })
  }
  render() {
    return (
      <div className="center-search">
        <input style={{width: 340, height: 30}} type="text" placeholder="搜索用户、星球或内容" value={this.state.inputvalue} onChange={this.handleChangeValue.bind(this)}/>
      </div>
    );
  }
}

export default Search;