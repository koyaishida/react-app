import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <label htmlFor="bar">bar</label>
      <input type="text" onClick={()=> console.log("i`m clicked")} />
    );
  }
}

export default App;
