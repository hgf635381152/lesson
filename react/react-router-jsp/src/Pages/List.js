import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  componentDidMount() {
    console.log(this.props)
    let tempid = this.props.match.params.id
    this.setState(
      {id: tempid}
    )
  }
  render() {
    return (
    <h2>List {this.state.id}</h2>
    );
  }
}

export default List;