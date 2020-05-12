import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import MenuList from './component/MenuList';

class App extends Component {
  render() {
    return (
      <Router>
        <div>

          <div className="con">
            <Switch >
              <Route exact path={["/", "/menu"]} component={MenuList} />
            </Switch>
          </div>

        </div>
      </Router>
    );

  }
}
export default App;

