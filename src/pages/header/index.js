import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from 'antd'

import './style.scss'

class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuItem: [
        { id: 1, name: '首页', path: '/index' },
        { id: 2, name: '专栏', path: '/specialColumn' },
        { id: 3, name: '文学', path: '/literature' }
      ]
    };
  }

  render() {
    return (
      <div className="header">
        <div className="header-area">
          <div className="container clear">
            <div className="logo left">
              <Link to='/'>
                <span className="title">前端客栈</span>
                {/* <span className="describe">一个前端开发者的博客</span> */}
                </Link>
            </div>
            <Menu className="header-menu" mode="horizontal">
              {
                this.state.menuItem.map(v => {
                  return (
                    <Menu.Item key={v.id}>
                      <Link to={v.path}>{v.name}</Link>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </div>
        </div>
        {/* <div className="header-bg">
          <div className="banner">
            <h1 className="banner-title">React-Router V4.0 视频教程</h1>
          </div>
        </div> */}
      </div>
    );
  }
}

export default index;