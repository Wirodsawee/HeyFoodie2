import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  state = {
    HeyFoodie: []
  };

  async componentDidMount(){
    try{
      const res = await fetch('http://127.0.0.1:8000/api/');
      const HeyFoodie = await res.json();
      this.setState({
        HeyFoodie
      });
    } catch (e){
      console.log(e);
    }
  }

  render(){
    return (
      <div>
        {this.state.HeyFoodie.map(item => (
          <div key={item.category_id}> 
          <h1>{item.category_name}</h1>
          </div>
        ))}
      </div>
    );
  }
}
export default App;