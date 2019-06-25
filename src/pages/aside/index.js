import React, { Component } from 'react'
import './index.scss'

class index extends Component {
  render() {
    return (
      <aside className="aside right">
        <div className="right-card">
          <div className="info-card">
            <div className="info-card-header">
              <img className="info-avatar" alt="头像" src={require('../../static/images/info-avatar.jpg')} />
            </div>
            <div className="info-card-body">
              <div className="info-nickname">墨客行吟</div>
              <div className="info-desc">
                向心求理，知行合一，一个永远在路上的修行者
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default index;