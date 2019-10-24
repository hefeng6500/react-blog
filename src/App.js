/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-06-29 17:16:52
 * @LastEditTime: 2019-10-22 22:34:27
 * @LastEditors: Please set LastEditors
 */
import React, {Component} from 'react';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.scss';
// import Header from './pages/header/index'

import Login from './pages/user/login';
import Layout from './components/Layout/index';

import {LocaleProvider} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
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
