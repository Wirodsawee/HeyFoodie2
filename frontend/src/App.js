import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import MenuList from './component/MenuList';
import Checkout from './component/Checkout';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <div className="con">
            <Switch >
              <Route exact path={["/", "/home"]} component={MenuList} />
              <Route path={["/checkout"]} component={Checkout} />
            </Switch>
          </div>

        </div>
      </Router>
    );

  }
}
export default App;

