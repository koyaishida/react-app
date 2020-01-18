import React from 'react';

/*class App extends Component {
  render() {
    return (
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" onClick={()=> console.log("i`m clicked")} />
      </div>
    );
  }
}*/
const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return <div>Meao!!</div>
}
export default App;
