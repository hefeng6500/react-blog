import React, { Component } from "react";


import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import './App.scss'
import Header from './pages/header/index'

import Login from './pages/user/login'
import Layout from './components/Layout/index'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: ''
    };
  }

  render() {

    return (
      <div className="App">
        <BrowserRouter>
          {/* <Header></Header> */}
          <Switch>
            <Route exact key={'login'} path={'/login'} component={Login} ></Route>
            <Route key={'layout'} path={'/'} component={Layout} ></Route>
          </Switch>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
