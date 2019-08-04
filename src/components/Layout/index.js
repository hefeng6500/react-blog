import React, { Component } from "react";

import { Layout } from "antd";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from '../ScrollToTop'
import Header from '../../pages/header/index'
import AppRouter from '../../routes/index'
import './index.scss'

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
                <p>HeFeng Blog© 2019 Created by Doctor Yang</p>
                <p>粤ICP备19012365号</p>
              </Footer>
            </Layout>
          </ScrollToTop>
        </BrowserRouter>
      </div >
    );
  }
}

export default App;
