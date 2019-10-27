import React, { Component } from 'react'
import GeoPattern  from 'geopattern';
import './index.scss'
class index extends Component {
  render() {
    return (
      <aside className="aside">
        <div className="right-card">
          <div className="info-card">
            <div className="info-card-header" style={{backgroundImage:GeoPattern.generate('技术胖', {color: '#ddd'}).toDataUrl() }}>
              <img className="info-avatar" alt="头像" src={require('../../static/images/info-avatar.jpg')} />
            </div>
            <div className="info-card-body">
              <div className="info-nickname">墨客行吟</div>
              <div className="info-desc">
                <p>向心求理，知行合一</p>
                <p>一个永远在路上的修行者</p>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }
}

export default index;