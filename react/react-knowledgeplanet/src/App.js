import React from 'react';
// import logo from './logo.svg';
import Head from './component/head/Head';
import Center from './component/center/Center';
import Bottom from './component/bottom/Bottom';
import CreatePlanet from './component/center/CreatePlanet'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Head />
      <Center />
      <Bottom /> */}
      <CreatePlanet />
    </div>
  );
}

export default App;
