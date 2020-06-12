import React from 'react';
import { fromJS } from 'immutable';
import ImmutableComponent from './components/common';
import logo from './logo.svg';
import Header from './components/Header'
import './App.css';


class App extends ImmutableComponent {
  state = {
    title: fromJS('123')
  }
  // shouldComponentUpdate() {

  // }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: fromJS('90')
      })
    }, 3000)
  }
  render() {
    console.log('app render');
    return (
      <div>
        123456
        <Header title={this.state.title} />
      </div>
    )
  }
}


export default App;