import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import MenuList from './component/MenuList';
import Header from './component/Header';
import Footer from './component/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header></Header>

          <div className="con">
            <Switch >
              <Route exact path={["/", "/menu"]} component={MenuList} />
            </Switch>
          </div>

          <Footer></Footer>
        </div>
      </Router>
    );

  }
}
export default App;

