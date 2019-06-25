import React, { Component } from "react";

import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from './components/ScrollToTop'
import Header from './pages/header/index'
import AppRouter from './AppRouter'
import './App.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: ''
    };
  }

  render() {
    const { Content, Footer } = Layout;

    return (
      <div className="App">
        <BrowserRouter>
          <ScrollToTop>
            <Layout>
              <Header></Header>
              <Content className='content'>
                <AppRouter></AppRouter>
              </Content>
              <Footer className="footer">
                HeFeng Blog© 2019 Created by Doctor Yang
              </Footer>
            </Layout>
          </ScrollToTop>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
