import React, { Component } from 'react'

class CreatePlanet extends Component {
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
      <div>
        <div>
          
        </div>
        <div>
          
        </div>
        <div>
          <input style={{ width: 340, height: 30 }} type="text" placeholder="输入星球名称" value={this.state.inputvalue} onChange={this.handleChangeValue.bind(this)} />
        </div>
      </div>
    );
  }
}

export default CreatePlanet;