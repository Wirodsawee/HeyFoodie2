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
    menu: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/menu/');
      const menu = await res.json();
      this.setState({
        menu
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
       <div>
         <center><h1>TEST HEYFOODIE</h1></center>
         
        {this.state.menu.map(item => (
          <div key={item.menu_id}>
            <img src={item.image} alt='image_menu' width='500px' height='249px'></img>
            <h1>{item.name}</h1>
            {/* <h1>{item.category.category_name}</h1>
            {/* <h1>{item.ingredient}</h1> */}
            <h1>{item.price} บาท</h1>
          </div>
        ))} 
      </div>
    );

  }
}
export default App;