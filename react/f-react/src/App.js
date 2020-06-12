import React, { Component } from 'react';
// import React from 'react';
// const Component = react.Component;

class App extends Component{
  render(){
    return(
      <ul className="my-list">
        {/* JSX */}
        <li>{true?'JS':'js'}</li>
        <li>React</li>
      </ul>
    )
    // var child1 = React.createElement('li', null, 'JS');
    // var child2 = React.createElement('li', null, 'React');
    // var root = React.createElement('ul', {className: 'my-list'}, child1, child2);
  }
}

export default App;