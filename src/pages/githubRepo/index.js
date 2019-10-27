import React, {Component} from 'react';
import {Card} from 'antd';
import {getRepos} from '../../api/github';
import GeoPattern  from 'geopattern';
import './index.scss';
import '../../css/icon_font/iconfont.css';

import Octicon, {
  Star,
  MarkGithub,
  Eye,
  RepoForked,
  Clock,
} from '@primer/octicons-react';

class index extends Component {
  constructor (props) {
    super (props);
    this.state = {
      repoList: [
        {
          name: 'React-App',
          fork: '2',
          start: '3',
          watch: '1',
          time: '2019-09-09',
          url: 'https://github.com/hefeng6500/React-App'
        },
        {
          name: 'react-blog',
          fork: '2',
          start: '3',
          watch: '1',
          time: '2019-09-09',
          url:'https://github.com/hefeng6500/react-blog'
        },
        {
          name: 'egg-example',
          fork: '2',
          start: '3',
          watch: '1',
          time: '2019-09-09',
          url:'https://github.com/hefeng6500/egg-example'
        },
      ],
    };
  }

  queryGitRepo () {
    getRepos ()
      .then (res => {
        let repoList = res;
        this.setState ({
          repoList: repoList.slice (0, 4),
        });
      })
      .then (err => {});
  }

  componentDidMount () {
    // this.queryGitRepo ();
  }
  render () {
    const {repoList} = this.state;
    return (
      <ul className="repo-list">
        {repoList.map (item => {
          return (
            <li className="repo-item">
              <Card bordered={false} className="thumbnail">
                <div className="background-image" style={{
                  backgroundImage: GeoPattern.generate(item.name).toDataUrl()
                }}>
                  <span className="repo-name">{item.name}</span>
                </div>
                <div className="repo-describe">{item.name}</div>
                <div className="repo-meta">
                  <div className="meta-text">

                    <span className="meta-info">
                      <Octicon icon={Star} verticalAlign='text-bottom' />
                      <span className="">{item.start}</span>
                    </span>

                    <span className="meta-info">
                      <Octicon icon={RepoForked} verticalAlign='text-bottom' />
                      <span className="">{item.fork}</span>
                    </span>

                    <span className="meta-info">
                      <Octicon icon={Eye} verticalAlign='text-bottom' />
                      <span className="">{item.watch}</span>
                    </span>

                    <span className="meta-info">
                      <Octicon icon={Clock} verticalAlign='text-bottom' />
                      <span className="">{item.time}</span>
                    </span>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default index;
