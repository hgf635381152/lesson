import * as React from 'react';
import { About,Header } from './components';


export const App: React.StatelessComponent<{}> = () => {
  return (
    <div className="container-fluid">
      <Header />
      <About />
    </div>
  );
}