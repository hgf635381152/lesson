import React from 'react';
import DemoUseEffect from './UseEffect'
// import logo from './logo.svg';
import DemoUseContext from './UseContext';
import DemoUseReducer from './UseReducer'
import './App.css';

function App() {
  return (
    <div className="App">
      <DemoUseEffect />
      <DemoUseContext />
      <DemoUseReducer />
    </div>
  );
}

export default App;
