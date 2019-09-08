import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
// import Header from './pages/header/index'

import Login from './pages/user/login';
import Layout from './components/Layout/index';

import {LocaleProvider} from 'antd';
import zhCN from 'antd/es/locale-provider/zh_CN';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      currentPath: '',
    };
  }

  render () {
    return (
      <div className="App">
        <LocaleProvider locale={zhCN}>
          <BrowserRouter>
            {/* <Header></Header> */}
            <Switch>
              <Route exact key={'login'} path={'/login'} component={Login} />
              <Route key={'layout'} path={'/'} component={Layout} />
            </Switch>
          </BrowserRouter>
        </LocaleProvider>
      </div>
    );
  }
}

export default App;
